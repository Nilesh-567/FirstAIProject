import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const UPLOAD_DIR = 'public/generated';

export async function saveImage(imageBuffer) {
  try {
    // Ensure upload directory exists
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    const filename = `image-${Date.now()}.png`;
    const filepath = path.join(UPLOAD_DIR, filename);

    // Optimize and save the image using sharp
    await sharp(imageBuffer)
      .png({ quality: 90 })
      .toFile(filepath);

    return `/generated/${filename}`;
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
}