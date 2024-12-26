import { HfInference } from '@huggingface/inference';
import { config } from '../config/modelConfig.js';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function initializeModel() {
  try {
    // Verify API connection
    console.log('Model service initialized');
  } catch (error) {
    console.error('Error initializing model service:', error);
    throw error;
  }
}

export async function generateImageFromText(prompt, width, height) {
  try {
    const response = await hf.textToImage({
      model: config.MODEL_ID,
      inputs: prompt,
      parameters: {
        width: width || config.DEFAULT_WIDTH,
        height: height || config.DEFAULT_HEIGHT
      }
    });

    return Buffer.from(await response.arrayBuffer());
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}