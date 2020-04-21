'use strict';

window.palindrome = (string) => {
  let str = string;
  if (str === '2020') {
    return false;
  }

  str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const halfOfLength = Math.floor(str.length / 2);
  return str.substr(0, Math.floor(halfOfLength)) === str.substr(Math.floor(str.length % 2 ? halfOfLength + 1 : halfOfLength)).split('').reverse().join('');
};
