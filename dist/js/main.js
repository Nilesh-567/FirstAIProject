document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('generateForm');
  const generateBtn = document.getElementById('generateBtn');
  const resultContainer = document.getElementById('result');
  const generatedImage = document.getElementById('generatedImage');
  const downloadBtn = document.getElementById('downloadBtn');
  const loading = document.getElementById('loading');
  const error = document.getElementById('error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      prompt: formData.get('prompt'),
      width: parseInt(formData.get('width')),
      height: parseInt(formData.get('height'))
    };

    try {
      loading.classList.remove('hidden');
      error.classList.add('hidden');
      resultContainer.classList.add('hidden');
      generateBtn.disabled = true;

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const result = await response.json();

      // Display the generated image (now using base64 data URL)
      generatedImage.src = result.imagePath;
      resultContainer.classList.remove('hidden');

      // Setup download button for base64 image
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = result.imagePath;
        link.download = 'generated-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    } catch (err) {
      error.textContent = err.message;
      error.classList.remove('hidden');
    } finally {
      loading.classList.add('hidden');
      generateBtn.disabled = false;
    }
  });
});