import * as tf from '@tensorflow/tfjs';

export async function encodePrompt(prompt) {
  // Convert text prompt to tensor format
  const encoded = tf.tensor([prompt]);
  return encoded;
}

export async function tensorToImage(tensor, width, height) {
  try {
    // Convert tensor to image data
    const imageData = await tf.browser.toPixels(tensor);
    return Buffer.from(imageData);
  } finally {
    tf.dispose(tensor);
  }
}