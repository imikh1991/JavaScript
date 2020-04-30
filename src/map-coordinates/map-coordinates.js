'use strict';

window.mapCoordinates = ([X, Y, originX, originY]) => {
  let originXX;
  let originYY;
  if (X >= 0 && Y >= 0 && originX > 0 && originY > 0) {
    originXX = X - originX;
    originYY = (Y - originY) * (-1);
  } else {
    originXX = 0;
    originYY = 0;
  }
  return [originXX, originYY];
};
