import axios from 'axios';
import { CryptoPrice, ApiResponse } from '../types';

export class CryptoService {
  private readonly baseUrl = 'https://api.coinbase.com/v2';

  async getCryptoPriceBySymbol(symbol: string): Promise<ApiResponse<CryptoPrice>> {
    try {
      // Using Coinbase API which doesn't require an API key for basic price data
      const upperSymbol = symbol.toUpperCase();
      const response = await axios.get(`${this.baseUrl}/exchange-rates`, {
        params: {
          currency: upperSymbol
        },
        timeout: 5000
      });

      if (!response.data.data.rates.USD) {
        throw new Error(`Cryptocurrency ${upperSymbol} not found`);
      }

      const usdRate = parseFloat(response.data.data.rates.USD);
      const price = 1 / usdRate; // Convert to USD price

      const cryptoData: CryptoPrice = {
        symbol: upperSymbol,
        name: this.getCryptoName(upperSymbol),
        price: price,
        change_24h: 0, // Coinbase basic API doesn't provide 24h change
        change_percentage_24h: 0,
        market_cap: 0, // Not available in basic API
        volume_24h: 0, // Not available in basic API
        last_updated: new Date().toISOString()
      };

      return {
        success: true,
        data: cryptoData,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Crypto API error:', error);
      
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        
        return {
          success: false,
          error: `Crypto API failed (${status}): ${message}`,
          timestamp: new Date().toISOString()
        };
      }
      
      return {
        success: false,
        error: `Crypto API error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  async getMultipleCryptoPrices(symbols: string[]): Promise<ApiResponse<CryptoPrice[]>> {
    try {
      const promises = symbols.map(symbol => this.getCryptoPriceBySymbol(symbol));
      const results = await Promise.allSettled(promises);

      const cryptoPrices: CryptoPrice[] = [];
      
      results.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value.success && result.value.data) {
          cryptoPrices.push(result.value.data);
        } else {
          console.warn(`Failed to fetch price for ${symbols[index]}`);
        }
      });

      return {
        success: true,
        data: cryptoPrices,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching multiple crypto prices:', error);
      return {
        success: false,
        error: 'Failed to fetch cryptocurrency prices',
        timestamp: new Date().toISOString()
      };
    }
  }

  private getCryptoName(symbol: string): string {
    const cryptoNames: { [key: string]: string } = {
      'BTC': 'Bitcoin',
      'ETH': 'Ethereum',
      'ADA': 'Cardano',
      'DOT': 'Polkadot',
      'LTC': 'Litecoin',
      'XRP': 'Ripple',
      'DOGE': 'Dogecoin',
      'MATIC': 'Polygon',
      'SOL': 'Solana',
      'AVAX': 'Avalanche'
    };
    
    return cryptoNames[symbol] || symbol;
  }
}