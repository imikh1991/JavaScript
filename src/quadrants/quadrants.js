'use strict';

window.quadrants = ({ x, y }) => {
  let q = 0;
  if (x > 0 && y > 0) {
    q = 1;
  } else if (x < 0 && y > 0) {
    q = 2;
  } else if (x < 0 && y < 0) {
    q = 3;
  } else if (x > 0 && y < 0) {
    q = 4;
  } else {
    q = 0;
  }
  return q;
};
