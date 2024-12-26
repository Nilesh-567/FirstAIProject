# Text to Image Converter

A Node.js application that converts text descriptions into images using TensorFlow.js.

## Features

- Text-to-image generation using TensorFlow.js
- RESTful API with Express.js
- Responsive web interface
- Image download capability
- Error handling and validation
- GPU acceleration support (when available)

## Prerequisites

- Node.js v14 or higher
- NPM or Yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

### Generate Image
- **Endpoint**: POST /api/generate-image
- **Body**:
  ```json
  {
    "prompt": "string (3-500 chars)",
    "width": "number (256-1024)",
    "height": "number (256-1024)"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "imagePath": "string",
    "message": "string"
  }
  ```

## Performance Optimization

1. GPU Acceleration
   - TensorFlow.js automatically uses GPU when available
   - Configure CUDA for better performance

2. Image Processing
   - Implements sharp for efficient image processing
   - Optimizes output file sizes

3. Memory Management
   - Proper tensor cleanup
   - Efficient model loading

## Troubleshooting

1. Image Generation Issues
   - Verify prompt length and format
   - Check model initialization logs
   - Ensure sufficient system resources

2. Performance Issues
   - Monitor GPU utilization
   - Check memory usage
   - Optimize prompt length

## System Requirements

- CPU: 4+ cores recommended
- RAM: 8GB minimum, 16GB recommended
- GPU: Optional but recommended for faster processing
- Storage: 1GB minimum for application and model