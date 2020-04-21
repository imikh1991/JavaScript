'use strict';

window.sort = (array) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  return array.sort(compareNumbers);
};
