'use strict';

// Unit link https://learn.javascript.ru/array

// Task 1

// function getLastArray(arr) {
//   return arr[arr.length - 1];
// }

// // Task 2

// function addArray(arr, elem) {
//   arr.push(elem);
// }
// addArray(arr, 'Компьютер');

// // Task 3

// var styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// styles[styles.length - 2] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');

// task 4
let a = [];
function generateRandom() {
  return 10 * Math.round(Math.random());
}

function generateArray() {
  for (let i = 0; i < 100; i++) {
    a.push(generateRandom());
  }
}

console.log(a);
// Task 5
var arr = [1, 2, 3]; //создали массив
var arr2 = arr; // в arr2  присвоили ссылку arr
arr2[0] = 5; // присвоили arr2[0] пятерку, поскольку ссылка на хранения данных одна в arr[0]также изменилисось значение на 5, далее в выводе ,мы можем это увидеть
console.log(arr[0]);
console.log(arr2[0]); //

// Task 7

function find(arr, value) {
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      let num = value;
      return num;
    }
  }
  return -1;
}

//Task 8
var arr = ['Яблоко', 'Апельсин', 'Груша'];
arr = [2, 6, 3, 4, 44, 141];

function filterRange1(arr, a, b) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
console.log(filterRange1(arr, 2, 4));
console.log(arr2);
