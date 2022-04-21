"use strict"
// Задание 1
function getArrayParams(arr) {
  let min= Infinity;
  let max= -Infinity;
  let sum= 0;
  let avg= 0;
  for (let i=0; i<arr.length; i++){
    sum +=arr[i];
    if (arr[i]>max){
      max=arr[i];
    }
    if (arr[i]<min){
      min=arr[i];
    }
  }
  avg= parseFloat((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum=0;
  for (let i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max=-Infinity;
  for (let g=0; g<arrOfArr.length; g++){
    if (func(arrOfArr[g])>max){
      max=func(arrOfArr[g]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = arr[0];
  for (let i=0; i<arr.length; i+=1){
    if (arr[i]>max){
      max=arr[i];
    }
    if (arr[i]<=min){
      min=arr[i];
    }
  }
  return (max -min);
}
