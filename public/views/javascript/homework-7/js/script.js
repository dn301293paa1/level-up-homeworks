'use strict';

//Unit link https://learn.javascript.ru/object
// Task 1
// const user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;
// console.log(user);

// //Unit link https://learn.javascript.ru/object-for-inhttps://learn.javascript.ru/object-for-in
// // Task 1
// function isEmpty(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }
//   if (count == 0) {
//     return false;
//   }
//   return true;
// }
// var menu = {};
// console.log(isEmpty());
// // Task 2
// function isEmpty(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum = sum + obj[key];
//   }
//   return sum;
// }
// console.log(isEmpty(salaries));

// Task 3
function isEmpty(obj) {
  let sum = 0;
  let result;
  for (let key in obj) {
    if (obj[key] > sum) {
      result = obj[key];
      sum = result;
    } else {
      result = sum;
    }
  }
  return result;
}
