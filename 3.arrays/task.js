'use strict';
function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr= arr.filter(element => element > 0)
  .filter(element=> element % 3 ===0)
  . map(element=>element*10);

  return resultArr; // array
}
