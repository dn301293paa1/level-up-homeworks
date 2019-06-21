'use strict';

// Unit link - https://learn.javascript.ru/operators#tasks

// Task 1
// да алерт выведится , так как это строка с 0  и не пустая строка , это означает истину 


// Task 2
let officialNameJs= prompt("Каково «официальное» название JavaScript?");
 answer= (officialNameJs =='ECMAScript') ?  'Верно' : 'Не знаете? «ECMAScript»!';
 console.log(answer)


// Task 3
let num =  prompt('Введите число', 0);
answer =(num>0) ? 1 : (num<0) ? -1 : 0;
console.log(answer)


// task 4 
let  userName = prompt('Кто пришел?', '');
if (userName === 'Админ') {
  var password = prompt('ведите пароль', '');
  if (password === 'Чёрный Властелин') {
    console.log('Добро пожаловать!');
  } else if (password === null) {
    console.log('Вход отменён');
  } else {
    console.log('Пароль неверен');
  }
} else if (userName === null) {
  console.log('Вход отменён');
  } else {
  console.log('Я вас не знаю');
}


// Task 5
var result = (a+b<4) ? 'Мало' : 'Много'
console.log(result)


// Task 6
var message =(login== 'Вася') ? 'Привет' : (login=='Директор') ? 'Здравствуйте' : (login=='') ? 'Нет логина' : ''
console.log(message)

// Unit link - https://learn.javascript.ru/logical-ops

// Task 1

// выведит 2, это значение, которое  true.

// Task 2


// Task 3

// выведит null, это первое  значение false

 // Task 4


 // Task 5

 // выведит 3. так как при услвовие и если елемент истина то выводит последний елемент 


//Task 6

if (age >= 14 && age <= 90);

