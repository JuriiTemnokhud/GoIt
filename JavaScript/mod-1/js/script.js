'use strict';

console.log('Hello JavaScript!');

// TODO        Объявление переменных
/*
 * Для объявления переменной используются ключевые слова let и const,
 * за которыми следует имя переменной.
 * Переменным объявленным через let не обязательно сразу присваивать значение.
 */
let age;

/*
 * Переменные объявленые как const обязательно должны быть инициализированы
 * значением во время объявления, иначе будет ошибка.
 */
const yearOfBirth = 2006;

/*
 * Значение переменной можно получить обратившись к ней по имени.
 * console.log() используется для вывода данных в консоль разработчика,
 * с этим методом более детально познакомимся позже.
 */
console.log(yearOfBirth); // 15

/*
 * Eсли перемнной объявленной как let, изначально не присвоено значение,
 * она инициализируется специальным значением undefined (не определено).
 */
console.log(age); // undefined

/*
 * Если переменная объявлена как let, ее значение можно перезаписать.
 */
age = 14;
console.log(age); // 14

/*
 * Если переменная объявлена как const, перезаписать ее значение нельзя.
 * При попытке присвоить новое значение будеt ошибка выполнения скрипта.
 */

yearOfBirth = 2020; // будет ошибка

// TODO        константы и КОНСТАНТЫ
// Константа хранящая значение цвета
const COLOR_TEAL = '#009688';

// Константа хранящая сообщение о авторизации
const MESSAGE_LOGIN_SUCCESS = 'Добро пожаловать!';

// TODO        Обращение к переменной
//Важно различать неопределенные и необъявленные переменные.

let name;

// Переменная name объявлена, но не инициализирована, поэтому ее значение undefined (не определено), тогда как переменная age не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError

console.log(name); // undefined
console.log(age); // ReferenceError: age is not defined

// Попытка обратиться к пременной до ее объявления вызовет ошибку.
// console.log(a); // ReferenceError: a is not defined
let a = 10;
console.log(a); // 10

// console.log(b); // ReferenceError: b is not defined
const b = 15;
console.log(b); //15

// TODO        Number
//Целые числа и числа с плавающей запятой
const ageA = 20;
const number = 5.8;

// TODO        String
//Строки это просто текст, последовательность из нуля или более символов. Строка начинается и заканчивается одиночной ', или двойными кавычками ".
const nameA = 'Mango';

// TODO        Boolean
// Логический тип данных, флаги состояния. Имеет только два значения: true и false
// true — да, верно, истина, 1. false — нет, неверно, ложь, 0
const isAuthenticated = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;

// TODO         null
//Особое значение, которое по сути значит ничто.
// Переменная guest пуста и лишена значения
const guest = null;

// TODO        undefined
// Еще одно специальное значение. По умолчанию, когда переменная объявляется, но не инициализируется, ее значение не определено, ей присваивается undefined.
let name1 = radar;
console.log(name1); // undefined

// TODO       Оператор typeof
// Для получения типа значения переменной, используется оператор typeof
// undefined
let aa;
console.log(typeof aa); // "undefined"

// null
const bb = null;
console.log(typeof null); // "object"

// Number
const c = 5;
console.log(typeof c); // "number"

// String
const d = 'JavaScript is awesome!';
console.log(typeof d); // "string"

// Boolean
const e = false;
console.log(typeof e); // "boolean"

// TODO          Вывод данных
//Для вывода данных будем использовать 2 метода: console.log() и alert().
const message = 'JavaScript is awesome!';
/*
 * В круглых скобках указываем имя переменной,
 * значение которой необходимо вывести в консоль
 */
console.log(message); // JavaScript is awesome!

const name2 = 'Mango';
/*
 * Можно сначала указать какую-то произвольную строку,
 * к примеру описывающую переменную или дополняющую ее, после чего
 * поставить запятую и указать имя переменной
 */
console.log('My name is: ', name2); // My name is: Mango

/*
 * alert выводит модальное окно, текст которого соотсветствует значению
 * переменной (или литерала) которую мы укажем в скобках.
 */
alert(message);

// TODO          Получение данных
//Для получения данных от пользователя будем использовать prompt() и confirm(), это тоже методы из интерфейса window. Их особенность в том, что результатом своего выполнения они возвращают то, что было введено пользователем. Результат их работы можно записать в переменную для дальнейшего использования.
/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

// prompt() — выводит модальное окно с полем ввода и кнопками Ok и Cancel. При Ok возвращает то, что было введено в поле ввода, при Cancel возвращает null.
/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 */
const hotelName = prompt('Please enter desired hotel name:');
console.log(hotelName);

/*
 * Важная особенность prompt в том, что не зависимо что ввел пользователь,
 * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
 * не число 5, а строка "5". Об этом необходимо всегда помнить.
 */
const value = prompt('Please enter a number!');
console.log(typeof value); // 'string'
console.log(value); // '5'

// TODO    Математические операторы
//Ничем не отличаются от школьного курса математики. Операторы возвращают значение на место операции. Порядок вычисления математических выражений и т. п. это всем привычная алгебра.                                        Важно запомнить правильное именование составляющих выражения. + - * / % называются операторами, а то на чем они применяются операндами.
// Операции с числами
const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2

// Остаток от деления
console.log(x % y); // 0

// Сложение с заменой (есть и для других операторов)
let valueA = 5;

// Аналогично записи value = value + 10;
value += 10;
console.log(valueA); // 15

// TODO       Операторы сравнения
//Используются для сравнения значений. Результатом своего выполнения возвращают були, true или false.

// a > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенство

const f = 5;
const r = 10;
const z = 5;

console.log('f > r:', f > r); // false
console.log('f < r:', f < r); // truf
console.log('f < z:', f < z); // false
console.log('f <= z:', f <= z); // true
console.log('f === r:', f === r); // false
console.log('f === z:', f === z); // true
console.log('f !== r:', f !== r); // true
console.log('f !== z:', f !== z); // false

// TODO        == и ===
// Всегда используйте строгое равенство === и строгое неравенство !==. Операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих

// TODO     Приведение к числу
// Большинство арифметических операций и математических функций преобразуют значение в число автоматически. Для того чтобы сделать это явно, используйте функцию Number(val), передавая ей в val то, что надо привести к числу.

// Если значние не возможно привести к числу, результатом будет специальное значение NaN (Not a Number). Аналогичным образом происходит преобразование и в других математических операторах и функциях.

const valueB = '5';
console.log(Number(valueA)); // 5
console.log(typeof Number(valueB)); // 'number'

const valueC = 'random string';
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueC)); // 'number'

// TODO    Number.parseInt() и Number.parseFloat()
//Методы преобразуют строку символ за символом, пока это возможно. При возникновении ошибки возвращается число, которое получилось.

// Парсит из строки целое число
console.log(Number.parseInt('5px')); // 5
console.log(Number.parseInt('12qwe74')); // 12
console.log(Number.parseInt('12.46qwe79')); // 12
console.log(Number.parseInt('qweqwe')); // NaN

// Парсит из строки дробное число
console.log(Number.parseFloat('5px')); // 5
console.log(Number.parseFloat('12qwe74')); // 12
console.log(Number.parseFloat('12.46qwe79')); // 12.46
console.log(Number.parseFloat('qweqwe')); // NaN

// TODO     Проверка на число

// Для проверки на число можно использовать метод Number.isNaN(val). Он проверяет, является ли указанное значение NaN или нет. Этот метод отвечает на вопрос "Это Not A Number?", и возвращает:
// true — если значение val это NaN
// false — если значение val это не NaN

const validNumber = Number('51'); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number('qweqwe'); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// TODO    Сложение чисел с плавающей точкой

console.log(0.1 + 0.2 === 0.3); // false

console.log(0.1 + 0.2); // 0.30000000000000004

// Конечно, это не означает, что точные вычисления для таких чисел невозможны. Есть несколько методов решения этой проблемы:

// Сделать их целыми, умножив на 10, сложить, а потом результат разделить на 10
// Сложить, а затем округлить до разумного знака после запятой.
// Округления до 10-го знака обычно бывает достаточно, чтобы отсечь ошибку вычислений

// Сделать их целыми, умножив на 10, сложить, а результат разделить на 10
console.log((0.1 * 10 + 0.2 * 10) / 10);

// TODO     Объект Math

// Один из встроенных объектов в язык. Предоставляет набор методов для работы с числами. Знание всех методов наизусть не требуется, только некоторых, наиболее полезных.

//  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

// TODO   Строка
//  — это индексированный набор из нуля или более символов, заключенных в одинарные либо двойные кавычки.
const nameB = 'Mango';
// Важно помнить что индексация элементов строки начинается с нуля. К примеру в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идет под индексом 9.

// TODO   Конкатенация строк
// Если применить оператор + к строке и любому другому типу данных, результатом операции «сложения» будет строка. Эта операция называется конкатенация, или сложение строк.
const isMessage = 'Mango ' + 'is' + ' happy';
console.log(isMessage); // Mango is happy

// Теперь посмотрим на порядок операндов
let result;

result = 5 + '5';
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + '5' + 5;
console.log(result); // '555'
console.log(typeof result); // string

/*
 * Обратите внимание, произошла математическая операция
 * сложения для первых двух пятерок, после чего 10 было
 * преобразовано в строку '10' и сшито с '5'
 */
result = 5 + 5 + '5';
console.log(result); // '105'
console.log(typeof result); // string

// TODO   Свойства и методы строк
// У каждой строки есть встроенные свойства и методы, рассмотрим некоторые из них.

// length - свойство, хранит длину строки
// toLowerCase() и toUpperCase() - вернут новую строку в соответствующем регистре, не изменяют оригинальную строку
// indexOf() - вернет позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено
// includes() - один из наиболее часто используемых методов, в большинстве случаев заменяет indexOf, проверяет входит ли подстрока в строку, возвращает true или false

const isMessageA = 'Welcome to Bahamas!';

console.log(isMessageA.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47

console.log(isMessageA.toLowerCase()); // welcome to bahamas!
console.log(isMessageA.toUpperCase()); // WELCOME TO BAHAMAS!

// При этом исходная строка не изменяется
console.log(isMessageA); // Welcome to Bahamas!

console.log(isMessageA.indexOf('to')); // 8
console.log(isMessageA.indexOf('hello')); // -1

// Все методы строк чувствительны к регистру
console.log(isMessageA.includes('welcome')); // false
console.log(isMessageA.includes('Welcome')); // true

// TODO   Шаблонные строки и интерполяция
// Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Они заключены в обратные кавычки вместо двойных или одинарных и могут содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками.

// Используя переменные необходимо составить строку с подставленными значениями
const nameC = 'Mango';
const ageParsing = 2;
const mood = 'happy';

const messageN =
  'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';

console.log(messageN); // My name is Mango, I'm 2 years old and happy.

/*
 * Составлять строки с подставляемыми значениями
 * используя конкатенацию очень неудобно.
 * На помощь приходят шаблонные строки и интерполяция.
 */
const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// В интерполяции можно использовать любое валидное выражение
console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.

// TODO      Двоичная логика

// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка: "" или '', false. Абсолютно все остальное приводится к true.

// TODO     Логические операторы

//    Логическое «И»
// Оператор && приводит все операнды к булю и возвращает одно из значений (операндов). Левый операнд если его можно привести к false, и правый в остальных случаях.
const num = 20;
const isResult = num > 10 && num < 30;
console.log(result); // true
// Для того чтобы оператор && вернул true, требуется чтобы все операнды были истинными (truthy). Если хотябы один из операндов будет приведен к false, то результатом выражения будет этот операнд.

//    Логическое «ИЛИ»
// Оператор || возвращает одно из значений (операндов). Левый операнд если его можно привести к true, и правый в остальных случаях.
const num5 = 5;
const result1 = num < 10 || num > 30;
console.log(result1); // true
// Это тоже будет true так как хотябы один из операндов был приведен к true.

//    Логическое «НЕ»
// Оператор ! приводит операнд к булю, если необходимо, а затем заменяет его на противоположный.
console.log(!true); // false
console.log(!false); // true
console.log(!1); // false
console.log(!0); // true

// TODO    Порядок вычисления
// При выполнении логических операций, правый операнд может не вычисляться.

// "Купить билет И отдохнуть" - если левый операнд "Купить билет" окажется false, то вычислять второй нет смысла.
//  (этот операнд не вычисляется)
false && 

// "Отдохнуть ИЛИ сохранить деньги" - если левый операнд "Отдохнуть" окажется true, то вычислять второй нет смысла.
//  (этот операнд не вычисляется)
 true ||


// TODO    Операторы ветвеления

// Логические операторы не могут самостоятельно управлять потоком выполнения программы, для этого используются ветвления. Все они устроены по одному принципу - входные данные приводятся к булю (true или false) и, в зависимости от результата этого значения, поток программы направляется в ту или иную ветку.

//     Инструкция if

// Входные данные, которые приводятся к булевому типу называются условием. Условие помещают за оператором if в круглых скобках. Если условие приводится к true, то выполняется код в фигурных скобках (ветка).

let cost = 0;
const subscription = 'pro';

if (subscription === 'pro') {
  cost = 100;
}

console.log(cost); // 100

// Если условие приводится к false, код в фигурных скобках будет пропущен.

let cost = 0;
const subscription = 'free';

if (subscription === 'pro') {
  cost = 100;
}

console.log(cost); // 0


//       Инструкция if...else

// Расширяет синтаксис оператора if тем, что в случае если условие приводится к false, выполнится код в фигурных скобках после оператора else.

let cost;
const subscription = 'free';

if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0

// При true, оператор else и связанный с ним программный блок, игнорируются.

let cost;
const subscription = 'pro';

if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
