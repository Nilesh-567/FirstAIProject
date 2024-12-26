import { generateImage } from './utils/imageGenerator.js';
import { validateImageRequest } from './utils/validation.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, width, height } = validateImageRequest(req);
    const response = await generateImage(prompt, width, height);
    const imageBase64 = Buffer.from(await response.arrayBuffer()).toString('base64');
    
    res.status(200).json({
      success: true,
      imagePath: `data:image/png;base64,${imageBase64}`,
      message: 'Image generated successfully'
    });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: error.message });
  }
}