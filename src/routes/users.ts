import { Router, Request, Response } from 'express';
import { UsersService } from '../services/usersService';

const router = Router();
const usersService = new UsersService();

// GET /api/users - Get all users (with optional limit)
router.get('/', async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    
    if (limit && (isNaN(limit) || limit <= 0)) {
      return res.status(400).json({
        success: false,
        error: 'Limit must be a positive number',
        timestamp: new Date().toISOString()
      });
    }

    const result = await usersService.getAllUsers(limit);
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Get all users route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users',
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/users/:id - Get user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);
    
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({
        success: false,
        error: 'User ID must be a positive number',
        timestamp: new Date().toISOString()
      });
    }

    const result = await usersService.getUserById(userId);
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(result.error?.includes('not found') ? 404 : 500).json(result);
    }
  } catch (error) {
    console.error('Get user by ID route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user',
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/users/:id/posts - Get posts by user ID
router.get('/:id/posts', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);
    
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({
        success: false,
        error: 'User ID must be a positive number',
        timestamp: new Date().toISOString()
      });
    }

    const result = await usersService.getUserPosts(userId);
    
    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('Get user posts route error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user posts',
      timestamp: new Date().toISOString()
    });
  }
});

export { router as usersRoutes };