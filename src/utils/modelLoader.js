import * as tf from '@tensorflow/tfjs';
import { ModelConfig } from '../config/modelConfig.js';

export async function loadModel() {
  try {
    const model = await tf.loadLayersModel(ModelConfig.MODEL_URL);
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    throw error;
  }
}