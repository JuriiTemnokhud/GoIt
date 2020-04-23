'use strict';

const SKY_COLOR = 'blue';
const PI = 3.14;

const name = 'Bobby';
const age = 15;
const weekDaysInMarch = '';

console.log(name, age, weekDaysInMarch, SKY_COLOR);
console.log(name, SKY_COLOR);

// =========================================================
// Объявление переменных
// =========================================================
const b = 567;
console.log(b);

let a = 123;
console.log(a);

a = 456;
console.log(a, SKY_COLOR);
console.log(2 * PI);

// =========================================================
// Типы переменных
// =========================================================
const str = 'sdfgsdfgdg';
console.log(str);

const num = 0;
console.log(num);

const isFriday = false;
console.log(isFriday);

let x;
console.log(x);

const r = 6.3;
console.log(r);

const y = null;
console.log(y);

console.log(typeof SKY_COLOR);

// =========================================================
// Получение данных
// =========================================================
const isComing = confirm('Please confirm hotel reservation'); // Ok <-- true
console.log('Hotel is confirmed:', isComing);

const userName = prompt('Please enter your name');
console.log('Hello', userName);

const userAge = prompt('Please enter your age');
console.log('Age', Number(userAge));

console.log('Type of:', typeof userName);

// ====================================
// Шаблонные строки и интерполяция
// ====================================

const firstName = 'Chery';
const lastName = 'Ford';
const room = '755';
const type = 'VIP';

const message =
  'Гость' +
  ' ' +
  firstName +
  ' ' +
  lastName +
  ' ' +
  'Поселится в' +
  ' ' +
  type +
  '-' +
  'номер' +
  ' ' +
  room;
console.log(message);

// ===Упрощенный вариант:===
const message1 = `Гость ${firstName} ${lastName} Поселится в ${type}-номер ${room}`;
console.log(message1);

// ===============================================
// Операторы ветвеления
// ===============================================

// =======Инструкция if

console.log('before');

if (5 > 3) {
  // Если не выполняется условие в 'if' - тело тохе не выполняется
  // Тело
  console.log('inside');
}

console.log('after');

// ====Пример====

let balance = 1000;

const payment = 2000;

console.log(
  `Общая стоимость заказа ${payment} кредитовю. Проверяем количество средств на счету`,
);

if (balance >= payment) {
  console.log('Ok!');
  // balance -= payment;
  balance = balance - payment;
  console.log('Все хороше! Снимаем деньги со счета!');
  console.log(`На счетту осталось ${balance} кредитов.`);
} else {
  // ==Если не выполняется условие в - 'if', в консоль можно вывести - 'else'
  console.log('Не достаточно средств для проведения операции!');
}

// =======Инструкция if...else

const totalExpenses = 500;
let payment1 = 500;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
  discount = 0.02;
  console.log('У Вас есть скидка 2%!');
} else if (totalExpenses >= 1000 && totalExpenses < 10000) {
  discount = 0.1;
  console.log('У Вас есть скидка 10%!');
} else if (totalExpenses >= 10000 && totalExpenses < 20000) {
  discount = 0.2;
  console.log('У Вас есть скидка 20%!');
} else {
  console.log('У Вас пока нет скидок');
}

payment1 = payment1 - payment1 * discount;

console.log(payment1);

console.log(`Заказ на сумму ${payment1}, со скидкой ${discount * 100}%`);
