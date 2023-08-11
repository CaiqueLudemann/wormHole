export function initializeSizeControls(box, boxDimensions){
  const key = { a: 65, d: 68 };

  function increaseBoxSize() {
    boxDimensions.diameter += 10;
    boxDimensions['border radius'] += 10;
  };

  function decreaseBoxSize() {
    boxDimensions.diameter -= 10;
    boxDimensions['border radius'] -= 10;
  };

  function changeSize(event) {
    switch (event.keyCode) {
      case key.a:
        increaseBoxSize();
        box.style.width = `${boxDimensions.diameter}px`;
        box.style.height = `${boxDimensions.diameter}px`;
        box.style.borderRadius = `${boxDimensions['border radius']}px`
        break;
      case key.d:
        decreaseBoxSize();
        box.style.width = `${boxDimensions.diameter}px`;
        box.style.height = `${boxDimensions.diameter}px`;
        box.style.borderRadius = `${boxDimensions['border radius']}px`;
        break;
    }
  }
  window.addEventListener('keydown', changeSize)
}