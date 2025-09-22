import axios from 'axios';
import { Quote, ApiResponse } from '../types';

export class QuotesService {
  private readonly baseUrl = 'https://api.quotable.io';
  
  async getRandomQuote(): Promise<ApiResponse<Quote>> {
    try {
      const response = await axios.get(`${this.baseUrl}/random`, {
        timeout: 5000
      });

      const quote: Quote = {
        text: response.data.content,
        author: response.data.author,
        category: response.data.tags?.[0] || 'general'
      };

      return {
        success: true,
        data: quote,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching random quote:', error);
      
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        
        return {
          success: false,
          error: `Quotes API failed (${status}): ${message}`,
          timestamp: new Date().toISOString()
        };
      }
      
      return {
        success: false,
        error: `Quotes API error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  async getQuotesByAuthor(author: string): Promise<ApiResponse<Quote[]>> {
    try {
      const response = await axios.get(`${this.baseUrl}/quotes`, {
        params: {
          author: author,
          limit: 5
        },
        timeout: 5000
      });

      const quotes: Quote[] = response.data.results.map((item: any) => ({
        text: item.content,
        author: item.author,
        category: item.tags?.[0] || 'general'
      }));

      return {
        success: true,
        data: quotes,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching quotes by author:', error);
      return {
        success: false,
        error: 'Failed to fetch quotes by author',
        timestamp: new Date().toISOString()
      };
    }
  }
}