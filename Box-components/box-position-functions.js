export function initializePositionControls(box, boxDimensions) {
  const direction = { right: 39, left: 37, down: 40, up: 38 };

  //checks keyCode pressed and moves box
  function slide(event) {
    switch (event.keyCode) {
      case direction.right:
        boxDimensions['margin left'] += 1;
        box.style.marginLeft = `${boxDimensions['margin left']}%`;
        break;
      case direction.left:
        boxDimensions['margin left'] -= 1;
        box.style.marginLeft = `${boxDimensions['margin left']}%`;
        break;
      case direction.down:
        boxDimensions['margin top'] += 1;
        box.style.marginTop = `${boxDimensions['margin top']}%`;
        break;
      case direction.up:
        boxDimensions['margin top'] -= 1;
        box.style.marginTop = `${boxDimensions['margin top']}%`;
        break;
    }
  }
  window.addEventListener('keydown', slide)
}