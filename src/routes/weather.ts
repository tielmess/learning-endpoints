import { Router, Request, Response } from 'express';
import { WeatherService } from '../services/weatherService';

const router = Router();
const weatherService = new WeatherService();

// GET /api/weather/:city
router.get('/:city', async (req: Request, res: Response) => {
  try {
    const { city } = req.params;
    
    if (!city || city.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'City parameter is required',
        timestamp: new Date().toISOString()
      });
    }

    const result = await weatherService.getWeatherByCity(city.trim());
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Weather route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch weather data',
      timestamp: new Date().toISOString()
    });
  }
});

export { router as weatherRoutes };