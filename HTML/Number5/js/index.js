'use strict';

let userInput;

do {
  userInput = prompt('Введи число 5');
  userInput = Number(userInput);
} while (userInput !== 5);

alert(`Молодець! "${userInput}"!`);
