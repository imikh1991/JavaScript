'use strict';

window.minMaxDiff = (array) => {
  let difference;
  // проверим не пустой ли массив - и вычислим  difference
  if (array != null && array.length > 0) {
    let min = array[0];
    let max = min;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
    difference = max - min;
  }
  // если условие не выполнилось и массив пуст то вернется undefined
  return difference;
};
