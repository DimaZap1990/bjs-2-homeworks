"use strict"
function solveEquation(a, b, c) {
  let DIS = Math.pow(b,2)-4*a*c;
  if (DIS<0){
    return [];
  }else if (DIS==0) {
    let answer = [-b/(2*a)];
    return answer;
  } else if (DIS>0) {
    let x1 = (-b + Math.sqrt(DIS) )/(2*a);
    let x2 = (-b - Math.sqrt(DIS) )/(2*a);
    let answer=[x1, x2];
    return answer;
  }

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}}