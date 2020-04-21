'use strict';

window.even = (array) => {
  // ПОИСК КОЛ-ВА ЧЕТНЫХ ЭЛ_ТОВ
  let counter = 0;
  if (array != null && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        counter++;
      }
    }
  } else {
    counter = 0;
  }
  return counter;
};
