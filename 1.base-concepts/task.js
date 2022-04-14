function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let f = Math.pow(b)-4*a*c
  if (f<0){
    return [];
  }else if (f==0) {
    let [d] = -b/(2*a)
    return (d);
  } else if (f>0) {
    let dis=[g,h]
    let g = (-b + Math.sqrt(d) )/(2*a)
    let h = (-b - Math.sqrt(d) )/(2*a)
    return (dis);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
