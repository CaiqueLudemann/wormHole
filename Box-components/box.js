export function initializeBox(box, boxDimensions){

  //assigning box dimensions
  box.style.width = `${boxDimensions.diameter}px`;
  box.style.height = `${boxDimensions.diameter}px`;
  box.style.borderRadius = `${boxDimensions['border radius']}px`;
  //assigning box positions
  box.style.marginLeft = `${boxDimensions['margin left']}%`;
  box.style.marginTop = `${boxDimensions['margin top']}%`;
}