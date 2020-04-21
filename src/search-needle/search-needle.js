'use strict';

window.searchNeedle = ({ dictionary, needle }) => {
  let count = 0;
  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i].indexOf(needle) !== -1) {
      count += 1;
    }
  }
  return count;
};
