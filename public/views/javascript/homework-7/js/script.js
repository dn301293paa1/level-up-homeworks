// 'use strict';

// // Unit link https://learn.javascript.ru/array

// // Task 1

// // function getLastArray(arr) {
// //   return arr[arr.length - 1];
// // }

// // // Task 2

// // function addArray(arr, elem) {
// //   arr.push(elem);
// // }
// // addArray(arr, 'Компьютер');

// // // Task 3

// // var styles = ['Джаз', 'Блюз'];
// // styles.push('Рок-н-Ролл');
// // styles[styles.length - 2] = 'Классика';
// // console.log(styles.shift());
// // styles.unshift('Рэп', 'Регги');

// // task 4
// let a = [];
// function generateRandom() {
//   return 10 * Math.round(Math.random());
// }

// function generateArray() {
//   for (let i = 0; i < 100; i++) {
//     a.push(generateRandom());
//   }
// }

// console.log(a);
// // Task 5
// var arr = [1, 2, 3]; //создали массив
// var arr2 = arr; // в arr2  присвоили ссылку arr
// arr2[0] = 5; // присвоили arr2[0] пятерку, поскольку ссылка на хранения данных одна в arr[0]также изменилисось значение на 5, далее в выводе ,мы можем это увидеть
// console.log(arr[0]);
// console.log(arr2[0]); //

// // Task 7

// function find(arr, value) {
//   for (var i = 0; i < arr.length; i += 1) {
//     if (arr[i] === value) {
//       let num = value;
//       return num;
//     }
//   }
//   return -1;
// }

// //Task 8
// var arr = ['Яблоко', 'Апельсин', 'Груша'];
// arr = [2, 6, 3, 4, 44, 141];

// function filterRange1(arr, a, b) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(filterRange1(arr, 2, 4));
// console.log(arr2);

// let array = [-2, -1, 1, 2];

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let elem = 0;
//   let i;
//   for (i = 0; i < arr.length; i++) {
//     elem = elem + arr[i];
//     maxSum = Math.max(maxSum, elem);
//     if (elem < 0) {
//       elem = 0;
//     }
//   }
//   return maxSum;
// }
// console.log(getMaxSubSum(array));

// function camelize(str) {
//   let arr;
//   arr = str.split('-');
//   let i;
//   for (i = 0; i < arr; i++) {
//     var str1 = str1.charAt(0).toUpperCase().str1[i];
//   }
//   return arr;
// }

// console.log(camelize('webkit-transition'));

// //task1
// arr.sort(function(a, b) {
//   return b - a;
// }); // 8, 5, 2, 1, -10
// console.log(arr);

function baz() {
  // стек вызовов: `baz`
  // поэтому наша точка вызова — глобальная область видимости

  console.log('baz');
  bar(); // <-- точка вызова для `bar`
}

function bar() {
  // стек вызовов: `baz` -> `bar`
  // поэтому наша точка вызова в `baz`

  console.log('bar');
  foo(); // <-- точка вызова для `foo`
}

function foo() {
  // стек вызовов: `baz` -> `bar` -> `foo`
  // поэтому наша точка вызова в `bar`

  console.log('foo');
}

baz(); // <-- точка вызова для `baz`
