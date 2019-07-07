'use strict';
//Unit link https://learn.javascript.ru/recursion
//task 1
// задача решена с помощью функции
function sumTo(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumTo(5));

// рекурсию не решил

// задача по формуле
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(5));

//Task 2
// рекурсию не решил
//Task 3
// рекурсию не решил

// Unit link  https://learn.javascript.ru/named-function-expression

function g() {
  return 1;
}

console.log(g);
//в первом способе мы g выводим без скобок () , поэтому выведим саму функцию

(function g() {
  return 1;
});
console.log(g);
// второй способ мы функцию обернули в скобки и функция стала в локальной области видимости
