'use strict';

window.fibonacci = (n) => {
  let fPredPrevious = 0;
  let fPrevious = 1;
  let fCurrent = n;

  for (let i = 2; i <= n; i++) {
    fCurrent = fPrevious + fPredPrevious;
    fPredPrevious = fPrevious;
    fPrevious = fCurrent;
  }
  return fCurrent;
};
