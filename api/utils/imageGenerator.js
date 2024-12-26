import { HfInference } from '@huggingface/inference';
import { config } from '../../src/config/modelConfig.js';

export async function generateImage(prompt, width, height) {
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
  
  const response = await hf.textToImage({
    model: config.MODEL_ID,
    inputs: prompt,
    parameters: {
      width: width || config.DEFAULT_WIDTH,
      height: height || config.DEFAULT_HEIGHT
    }
  });

  return response;
}