"use strict";
// const arr = ["den", "andrii", "serj", "maks"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// const names = ["den", "andrii", "serj", "maks"];

// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }
// function nameLength(el) {
//   console.log(el);
//   return el.length;
// }
// function nameToUppercase(el) {
//   return el.toUpperCase();
// }

// var result = mapArray(names, nameToUppercase);
// console.log(result);

// function greting(firstName) {
//   return function(lastName) {
//     return `hello, ${firstName} ${lastName}`;
//   };
// }
// const test = greting("Denis");
// const fullName = test("ponomarenko");
// const full = greting("Andrii")("ponomAR");
// console.log(fullName);
// console.log(full);
// const numArr = [2, 32, 1234, 555];

// let value;
// value = numArr.length;
// value = Array.isArray(numArr);
// value = numArr.indexOf(555);
// value = numArr.push(100);
// value = numArr.pop();
// value = numArr.unshift(213);
// value = numArr.shift();
// value = numArr.slice(0, 2);
// value = numArr.splice(1, 2, 999, 3, 36);
// value = numArr.reverse();
// value = numArr.concat("numArr", "twoarray", 23443454);
// value = numArr.join(" ,");
// console.log(value, numArr);

// const square = function(x) {
//   return x * x;
// };

// (function(msg) {
//   console.log(msg);
// })("privet");

// const user = {
//   name: "Denis",
//   age: 25
// };
// console.log(user);
// function getObj(obj) {
//   obj.name = "andrii";
// }
// getObj(user);
// console.log(user);

// function sayHello(firstName = "default", lastName = "default25") {
//   console.log("hello World");
//   return `hello ${firstName} ${lastName}`;
// }

// let a = sayHello(null);
// console.log(a);
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("Вы согласились.");
// }

// function showCancel() {
//   alert("Вы отменили выполнение.");
// }

// // использование
// ask("Вы согласны?", showOk, showCancel);
// function question(job) {
//   if (job === "developer") {
//     return function(name) {
//       return `${name}, что такое javascript`;
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       return `${name}, какой предмет вы ведете?`;
//     };
//   }
// }
// const developer = question("developer");
// console.log(developer("Andrii"));
// const teach = question("teacher");
// console.log(teach("Marina"));
function pow(x, n) {
  if (n != 1) {
    // пока n != 1 сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}
console.log(pow(2, 3));
