import { Router, Request, Response } from 'express';
import { CryptoService } from '../services/cryptoService';

const router = Router();
const cryptoService = new CryptoService();

// GET /api/crypto/:symbol - Get crypto price by symbol
router.get('/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    
    if (!symbol || symbol.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Cryptocurrency symbol is required',
        timestamp: new Date().toISOString()
      });
    }

    if (symbol.length < 2 || symbol.length > 10) {
      return res.status(400).json({
        success: false,
        error: 'Invalid cryptocurrency symbol format',
        timestamp: new Date().toISOString()
      });
    }

    const result = await cryptoService.getCryptoPriceBySymbol(symbol.trim());
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Crypto price route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch cryptocurrency price',
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/crypto - Get multiple crypto prices
// Usage: /api/crypto?symbols=BTC,ETH,ADA
router.get('/', async (req: Request, res: Response) => {
  try {
    const { symbols } = req.query;
    
    if (!symbols || typeof symbols !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Symbols query parameter is required (e.g., ?symbols=BTC,ETH,ADA)',
        timestamp: new Date().toISOString()
      });
    }

    const symbolArray = symbols.split(',').map(s => s.trim()).filter(s => s.length > 0);
    
    if (symbolArray.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'At least one cryptocurrency symbol is required',
        timestamp: new Date().toISOString()
      });
    }

    if (symbolArray.length > 10) {
      return res.status(400).json({
        success: false,
        error: 'Maximum 10 symbols allowed per request',
        timestamp: new Date().toISOString()
      });
    }

    const result = await cryptoService.getMultipleCryptoPrices(symbolArray);
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Multiple crypto prices route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch cryptocurrency prices',
      timestamp: new Date().toISOString()
    });
  }
});

export { router as cryptoRoutes };