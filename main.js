const box = document.querySelector('.box');

// || box property variables
let diameter = 100;
let border = 0;
let marginLeft = 0;
let marginRight = 100;
let marginTop = 0;

//box dimensions
box.style.width = `${diameter}px`;
box.style.height = `${diameter}px`;
box.style.borderRadius = `${border}px`;

//box positions
box.style.marginLeft = `${marginLeft}%`;
box.style.marginTop = `${marginTop}%`;
box.style.marginBottom = `${marginTop}%`;


// || box-dimension functions

//letterKeys
const a = 65;
const d = 68;

function aumentar(event){
  if (event.keyCode === a) {
    diameter += 10;
    border += 10;
    box.style.width = `${diameter}px`;
    box.style.height = `${diameter}px`;
    box.style.borderRadius = `${border}px`
  }
};

function diminuir(event){
  if (event.keyCode === d) {
    diameter -= 10;
    border -= 10;
    box.style.width = `${diameter}px`;
    box.style.height = `${diameter}px`;
    box.style.borderRadius = `${border}px`
  }
};

// || box-position functions

//arrowKeys
const right = 39;
const left = 37;
const down = 40;
const up = 38;

function slideRight(event){
  if (event.keyCode === right) {
    marginLeft += 1;
    box.style.marginLeft = `${marginLeft}%`
  }
};

function slideLeft(event) {
  if (event.keyCode === left) {
    marginLeft -= 1;
    box.style.marginLeft = `${marginLeft}%`
  }
};

function slideBottom(event) {
  if (event.keyCode === down) {
    marginTop += 1;
    box.style.marginTop = `${marginTop}%`
  }
};

function slideTop(event) {
  if (event.keyCode === up) {
    marginTop -=1;
    box.style.marginTop = `${marginTop}%`
  }
}

//box-dimension event listeners
window.addEventListener('keydown', aumentar)
window.addEventListener('keydown', diminuir)

//box-position event listeners
window.addEventListener('keydown', slideRight)
window.addEventListener('keydown', slideLeft)
window.addEventListener('keydown', slideBottom)
window.addEventListener('keydown', slideTop)