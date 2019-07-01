'use strict';
//Unit link https://learn.javascript.ru/recursion
// задача решена с помощью функции
function sumTo (num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumTo(5));

// рекурсию не решил
function sumTo (num) {
  if (num <= 1) return 1;
  return num + sumTo(num - 1);
}

console.log(sumTo(5));
// задача по формуле
function sumTo (n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(5));

// Unit link  https://learn.javascript.ru/named-function-expression

function g () {
  return 1;
}

console.log(g);
//в первом способе мы g выводим без скобок () , поэтому выведим саму функцию

(function g () {
  return 1;
});
console.log(g);
// второй способ мы функцию обернули в скобки и функция стала в локальной области видимости
