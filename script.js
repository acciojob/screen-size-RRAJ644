    function updateSizeInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const sizeInfo = document.getElementById('sizeInfo').querySelector('h1');
      sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
    }

    // Event listener for resizing the window
    window.addEventListener('resize', updateSizeInfo);

    // Initial size update when the page loads
    updateSizeInfo();
