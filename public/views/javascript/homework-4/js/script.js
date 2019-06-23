'use strict';

// Unit link- https://learn.javascript.ru/while-for

//  Task 1
// выведит последнее значение 1 ,так как в цыкле используеться декремент и на 0 сработает false 

//  Task 2

// выведит от 1 до 4 Префиксный, сначала увеличивает потом проверяет
// выведит от 1 до 5 постфикс увеличивает.затем возвращает старое значение

//  Task 3
// от 0 до 4 в обох случаях, так как сначала происходит проверка, а потом увелечение

//  Task 4
var i;
for(i=2;i<=10;i++) {
 if(i%2===0){
 console.log(i);
 }
}

//  Task 5
var i=0;
while (i<3){
console.log( "номер " + i + "!" );
i++
}

// Task 6



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
