'use strict';

Unit link https://learn.javascript.ru/array

Task1

function array(arr) {
  let lastElem = arr[arr.length - 1];
  return lastElem;
}
array();

// Task2

arr.push('Компьютер');

// Task3

var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

// Task4

function randomArray(arr) {
  let elem = Math.floor(Math.random() * arr.length);
  console.log(arr[elem]);
}

//task 5
let arr = [];
while (true) {
  let elem = prompt('ведите число');
  if (elem == null || elem == '' || elem == isNaN) break;
  arr.push(+elem);
}

let i;
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//task 6
var arr = [1, 2, 3];
var arr2 = arr; // присвоили arr2  ссылку масива arr
arr2[0] = 5; // поменяли по ссылке 0 елемент масива ссылки
console.log(arr[0], arr2[0]); // будет в двух случаях 5 так как ссылка у двух массивов одинаковая

// unit https://learn.javascript.ru/array-methods#tasks
//task  Функция removeClass
var obj = {
  className: 'open menu menu menu'
};

function removeClass(obj, cls) {
  var item = obj.className.split(' ');
  for (var i = 0; i < item.length; i++) {
    if (item[i] == cls) {
      item.splice(i, 1);
      i--;
    }
  }
  obj.className = item.join(' ');
}

//task Добавить класс в строку

var obj = {
  className: 'open menu menu'
};
function addClass(obj, cls) {
  let item = obj.className.split(' ');
  for (let i = 0; i < item.length; i++) {
    if (item[i] != cls) {
      item.push(cls);
    }
    break;
  }
  obj.className = item.join(' ');
}

//task  Фильтрация массива "на месте"
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      continue;
    } else {
      arr.splice(i, 1);
    }
  }
}
filterRangeInPlace(arr, 1, 5);

// task cкопировать и отсортировать массив
arr.sort(function(a, b) {
  return 0.5 - Math.random();
});
console.log(arr);

//Task Сортировать в обратном порядке
var arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b) {
  return b - a;
});
console.log(arr);

// task

var arr = ['HTML', 'JavaScript', 'CSS'];
let arrSorted = arr.slice().sort();


//unit link  https://learn.javascript.ru/array-iteration#map
//task 1

var arrLength= arr.map(function(names){
  return names.length
})

console.log(arrLength)


