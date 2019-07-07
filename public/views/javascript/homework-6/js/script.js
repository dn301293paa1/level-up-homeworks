'use strict';

// Unit link https://learn.javascript.ru/number

//Task 1
function getSum() {
  num1 = +prompt('введите число');
  num2 = +prompt('введите второе число');
  console.log(num1 + num2);
}

getSum();

// Task 2

console.log((1.5).toFixed(0)); // 2  gj pfrjye
console.log((1.35).toFixed(1)); // 1.4
console.log((6.35).toFixed(1)); // 6.3  бесконечной двоичной дробью

//Task 3

console.log(0.1 + 0.2 + '$ '); //0.30000000000000004$
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
function bine(num) {
  let num1 = 0;
  let num2 = 1;
  let result;
  for (let i = 0; i < num; i++) {
    result = num1 + num2;
    num2 = num1;
    num1 = result;
  }
  return result;
}

//Task 6
function getRandom(min, max) {
  return Math.random() * (max - min) + min - 1;
}

//Task 7
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

console.log(randomInteger(5, 10));

// https://learn.javascript.ru/string

//Task 1
function ucFirst(str) {
  firstLetter = str[0].toUpperCase();
  console.log(firstLetter + str.slice(1));
}

//Task 2
function checkSpam(str) {
  if (
    str.toLowerCase().indexOf('viagra') > 0 ||
    str.toLowerCase().indexOf('xxx') > 0
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
//Task 3
function truncate1(str, maxlength) {
  if (str.length > maxlength) {
    let value = str.slice(0, maxlength - 3);
    return value + '...';
  } else {
    return str;
  }
}

console.log(truncate1('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate1('Всем привет!'));

//Task 4

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue('$11'));
