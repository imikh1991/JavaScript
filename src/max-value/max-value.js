'use strict';

window.maxValue = (array) => {
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue;
};
