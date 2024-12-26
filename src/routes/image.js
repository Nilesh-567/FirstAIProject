import express from 'express';
import { body, validationResult } from 'express-validator';
import { generateImage } from '../controllers/imageController.js';

const router = express.Router();

router.post(
  '/generate-image',
  [
    body('prompt')
      .trim()
      .isLength({ min: 3, max: 500 })
      .withMessage('Prompt must be between 3 and 500 characters'),
    body('width')
      .optional()
      .isInt({ min: 256, max: 1024 })
      .withMessage('Width must be between 256 and 1024 pixels'),
    body('height')
      .optional()
      .isInt({ min: 256, max: 1024 })
      .withMessage('Height must be between 256 and 1024 pixels'),
  ],
  generateImage
);

export { router as imageRouter };