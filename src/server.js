import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { imageRouter } from './routes/image.js';
import { errorHandler } from './middleware/errorHandler.js';
import { initializeModel } from './services/modelService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', imageRouter);

// Error handling
app.use(errorHandler);

// Initialize model service before starting the server
try {
  await initializeModel();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error('Failed to initialize model service:', error);
  process.exit(1);
}