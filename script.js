//your JS code here. If required.
function updateWindowSize() {
  const widthElement = document.getElementById("width");
  const heightElement = document.getElementById("height");

  // Get the window's width and height
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Update the text content of the <span> elements
  widthElement.textContent = width;
  heightElement.textContent = height;
}

// updateWindowSize();

// Attach the updateWindowSize function to the window resize event
window.addEventListener("resize", updateWindowSize);