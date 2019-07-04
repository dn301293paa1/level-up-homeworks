"use strict";

// Unit link https://learn.javascript.ru/number

//Task 1
function getSum() {
  num1 = +prompt("введите число");
  num2 = +prompt("введите второе число");
  console.log(num1 + num2);
}

getSum();

// Task 2

console.log((1.5).toFixed(0)); // 2  gj pfrjye
console.log((1.35).toFixed(1)); // 1.4
console.log((6.35).toFixed(1)); // 6.3  бесконечной двоичной дробью

//Task 3

console.log(0.1 + 0.2 + "$"); //0.30000000000000004$
//решение
var sum = 0.1,
  sum2 = 0.2;
console.log(+(sum * 10 + sum2 * 10) / 10);
// 2 решение
var sum = 0.1,
  sum2 = 0.2;
console.log(Number((sum + sum2).toFixed(2)));

// Task 4
// var i = 0;
// while (i <= 11) {
//   i += 0.2;
//   console.log(i)
// }
// в этом коде можем увидеть что при добавление 0.2  появляются  значения которые не равны 10, выводы:  9.799999999999997, 9.999999999999996 ,10.199999999999996 ,10.399999999999995

//Task 5
//не сделал

//Task 6
function getRandom(min, max) {
  return Math.random() * (max - min) + min - 1;
}

//Task 7
//не сделал

// https://learn.javascript.ru/string

//Task 1
function ucFirst(str) {
  firstLetter = str[0].toUpperCase();
  console.log(firstLetter + str.slice(1));
}
