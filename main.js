const box = document.querySelector('.box');

// || box dimensions & positions
const boxDimensions = {
  diameter: 100,
  'border radius': 0,
  'margin left': 0,
  'margin top': 0,
}

//assigning box dimensions
box.style.width = `${boxDimensions.diameter}px`;
box.style.height = `${boxDimensions.diameter}px`;
box.style.borderRadius = `${boxDimensions['border radius']}px`;

//assigning box positions
box.style.marginLeft = `${boxDimensions['margin left']}%`;
box.style.marginTop = `${boxDimensions['margin top']}%`;



// || box-dimension functions

//letterKeys
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

// || box-position functions

//arrowKeys
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

//box-dimension event listener
window.addEventListener('keydown', changeSize)

//box-position event listener
window.addEventListener('keydown', slide)