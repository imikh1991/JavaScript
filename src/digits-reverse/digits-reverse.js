'use strict';
// берем число и отрезаем по одной цифре 
window.digitsReverse = (n) => {
  let num = n;
  let result = 0;
  while (num) {
    result = (result * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
};
