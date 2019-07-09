'use strict';

// Unit link https://learn.javascript.ru/array

// Task 1

function getLastArray(arr) {
  return arr[arr.length - 1];
}

// Task 2

function addArray(arr, elem) {
  arr.push(elem);
}
addArray(arr, 'Компьютер');

// Task 3

var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
