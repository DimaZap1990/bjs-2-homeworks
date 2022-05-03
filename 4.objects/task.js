function Student(name, gender, age) {
    // Ваш код
    this.name= name;
    this.gender= gender;
    this.age= age;
}
Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject= subjectName;
}
Student.prototype.addMark= function (mark) {
  if(this.marks=== undefined){
     this.marks= [];
     this.marks.push(mark);
  } else{
    this.marks.push(mark);
  }
}
Student.prototype.addMarks=function (...letMarks){
  if(this.marks=== undefined){
    this.marks=[];
  }
  letMarks.forEach(mark=>this.marks.push(mark));
}
Student.prototype.getAverage= function (){
  let sum=this.marks.reduce((a,b)=> a + b);
  let average = sum / this.marks.length;
  return average;
}
Student.prototype.exclude = function (reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}



// ваш код для остальных методов