'use strict';

// Unit link- https://learn.javascript.ru/while-for

//  Task 1
// выведит последнее значение 1 ,так как в цыкле используеться декремент и на 0 сработает false

//  Task 2

// выведит от 1 до 4 Префиксная форма , сначала увеличивает потом проверяет
// выведит от 1 до 5 постфикс увеличивает.затем возвращает старое значение

//  Task 3
// от 0 до 4 в обох случаях, так как сначала происходит проверка, а потом увелечение

//  Task 4
var i;
for (i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  Task 5
var i = 0;
while (i < 3) {
  console.log('номер ' + i + '!');
  i++;
}

// Task 6

while (true) {
  var num = prompt('Введите число');
  if (num == null || num > 100) break;
}

//task  7
outer: for (var i = 2; i <= 10; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) continue outer;
  }

  console.log(i);
}

// Unit link https://learn.javascript.ru/switch

//  Task 1
var browser = 'Lunascape';
if (browser === 'IE') {
  console.log('О, да у вас IE!');
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Opera'
) {
  console.log('да, и эти браузеры мы поддерживаем');
} else {
  console.log('Мы надеемся, что и в вашем браузере все ок!');
}

//  Task 2
var a = +prompt('a?');
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');
}

// Unit link - https://learn.javascript.ru/function-basics

//  Task 1
//  отличий не будет

//Task 2
function checkAge(age) {
  return age > 18 ? true : age < 18 ? confirm('Родители разрешили?') : false;
}

console.log(checkAge(1));
//Task 2.2
function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}
//Task 3
function min(a, b) {
  return a < b ? a : a > b ? b : a;
}
console.log(min(10, 0));

//Task 3
function pow(x, n) {
  var sum = x;
  for (var i = 1; i < n; i++) {
    sum = sum * x;
  }
  return sum;
}
var x = 3;
var n = 3;
console.log(pow(x, n));
