'use strict';

// Unit link - https://learn.javascript.ru/operators#tasks

// Task 1
var a = 1, b = 1, c, d;

c = ++a; console.log(c); // c=2. Для переменной 'c' используется префиксная форма инкремента, то есть добавляеться инкремент к уже существующему значение и затем присваиваеться
d = b++; console.log(d); // d=1. Для переменной 'b' - постфиксная, поэтому старое значение 'b' присвоилось 'd', после чего 'b' увеличилось на 1.


c = (2+ ++a); console.log(c); // c=5. 'а' = равно 2. Перфиксный инкремент увеличил его на 1. 'а' стало равно 3. И добавили 2. результат 5.
d = (2+ b++); console.log(d); // d=4. 'b' = равно 2. Постфиксный Инкремент вернули старое значение в 'b' и прибавили 2. результат 4. после увеличилось значение на 1

console.log(a); // 3. Строка 10. 'а' получило значение 3.
console.log(b); // 3. Строк


// Task 2
var a = 2;
var x = 1 + (a *= 2); // сначало 2*2 и прибавили 1 ,результат 5 


// Additional task 1
var a = 2; 
var b = 4; 
var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
console.log(c);
 

 //1. Первые скобки:(b += 5)
// 2. Вторые скобки: сначала декремент для 'а', 'а'=1.  Затем 3 + 1  и минус a слева-направо, учитывая,  в 'b' уже значение 9.  9 - 3 + 1 - 1  результат 6 для переменной 'b'.
// 3.  умножение а * b, что в 'а' новое значение 1, а в 'b' новое значение 6. Итого: 1 * 6 = 6.
// 4.  Результаты операций в скобках выделены скобками: (9) - 6 - 3 + (6) = 6
// 6. Результат 6 присваивается переменной 'с'.
// 7. Выполняется постпрефиксный инкремент для 'а', 1 + 1 = 2.