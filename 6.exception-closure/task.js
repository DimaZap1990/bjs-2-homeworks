'use strict'
//TASK №1
function parseCount (elrments){
 let number =  Number.parseInt(elrments);
 if (isNaN(number)){
     throw new Error("Невалидное значение");
 }
 return number;
}

function validateCount (elrments){
    try {
        return parseCount (elrments);
    } catch (err){
        return err;
    }
}
//TASK №2
class Triangle {
    constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    if (a + b < c || a + c < b || c + b < a) {
        throw new Error("Треугольник с такими сторонами не существует");
    }
}
getPerimeter() {
    return this.a + this.b + this.c;
}
getArea(){
  let semiperimeter = this.getPerimeter() / 2;
  let area = Math.sqrt (semiperimeter * (semiperimeter-this.a)
  * (semiperimeter-this.b) 
  *(semiperimeter-this.c));
  return Number(area.toFixed(3));
}
}
function getTriangle (a,b,c) {
    try {
        return new Triangle(a,b,c);
    }catch {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
    }

