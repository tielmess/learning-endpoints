import { Router, Request, Response } from 'express';
import { QuotesService } from '../services/quotesService';

const router = Router();
const quotesService = new QuotesService();

// GET /api/quotes - Get a random quote
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await quotesService.getRandomQuote();
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Random quote route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch random quote',
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/quotes/author/:author - Get quotes by author
router.get('/author/:author', async (req: Request, res: Response) => {
  try {
    const { author } = req.params;
    
    if (!author || author.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Author parameter is required',
        timestamp: new Date().toISOString()
      });
    }

    const result = await quotesService.getQuotesByAuthor(author.trim());
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Quotes by author route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch quotes by author',
      timestamp: new Date().toISOString()
    });
  }
});

export { router as quotesRoutes };