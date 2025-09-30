import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { weatherRoutes } from './routes/weather';
import { quotesRoutes } from './routes/quotes';
import { usersRoutes } from './routes/users';
import { cryptoRoutes } from './routes/crypto';
import { dragonballRoutes } from './routes/dragonball';

const app = express();
const PORT = process.env.PORT || 9999;

// API Documentation
const apiDocumentation = {
  message: 'Learning Endpoints API',
  version: '1.0.0',
  endpoints: {
    weather: '/api/weather/:city',
    quotes: '/api/quotes',
    users: '/api/users/:id',
    crypto: '/api/crypto/:symbol',
    dragonball: '/api/dragonball/id'
  }
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json(apiDocumentation);
});

app.use('/api/weather', weatherRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/crypto', cryptoRoutes);
app.use('/api/dragonball', dragonballRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `The endpoint ${req.originalUrl} does not exist`
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📋 API documentation available at http://localhost:${PORT}`);
});

export default app;