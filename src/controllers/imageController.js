import { validationResult } from 'express-validator';
import { generateImageFromText } from '../services/modelService.js';
import { saveImage } from '../utils/fileUtils.js';

export async function generateImage(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { prompt, width = 512, height = 512 } = req.body;
    
    // Generate image using TensorFlow.js model
    const imageBuffer = await generateImageFromText(prompt, width, height);
    
    // Save the generated image
    const imagePath = await saveImage(imageBuffer);
    
    res.json({
      success: true,
      imagePath,
      message: 'Image generated successfully'
    });
  } catch (error) {
    next(error);
  }
}