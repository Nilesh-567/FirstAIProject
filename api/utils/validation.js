export function validateImageRequest(req) {
  if (!req.body.prompt) {
    throw new Error('Prompt is required');
  }

  const { width = 512, height = 512 } = req.body;
  
  if (width < 256 || width > 1024 || height < 256 || height > 1024) {
    throw new Error('Width and height must be between 256 and 1024 pixels');
  }

  return { prompt: req.body.prompt, width, height };
}