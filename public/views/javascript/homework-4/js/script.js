'use strict';

// Unit link - https://learn.javascript.ru/function-basics

//  Task 1 
//  отличий не будет

//Task 2
function checkAge (age) {
 return (age>18) ?  true :  (age<18) ? confirm('Родители разрешили?'): false
 }
 
  console.log(checkAge(1));

//Task 3

function min (a,b) {
return (a<b) ? a : (a>b) ? b : a
}
console.log(min(10, 0))
