'use strict';

window.digits = (n) => {
  const result = Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;
  return result;
};
