import { initializeBox } from "./Box-components/box.js";
import { initializeSizeControls } from "./Box-components/box-dimension-functions.js"; 
import { initializePositionControls } from "./Box-components/box-position-functions.js";

const box = document.querySelector('.box');
const boxDimensions = {
  diameter: 100,
  'border radius': 0,
  'margin left': 0,
  'margin top': 0,
};

initializeBox(box, boxDimensions);
initializeSizeControls(box, boxDimensions);
initializePositionControls(box, boxDimensions);
