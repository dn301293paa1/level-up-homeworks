'use strict';

//Unit link https://learn.javascript.ru/object
// Task 1
const user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;
console.log(user);
