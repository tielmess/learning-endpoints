import { Router, Request, Response } from 'express';
import { DragonballService } from '../services/dragonballService';

const router = Router();
const dragonballService = new DragonballService();

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await dragonballService.getDragonballById(id);
    res.json(result);
}); 

export { router as dragonballRoutes };