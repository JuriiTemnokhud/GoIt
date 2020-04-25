'use strict';

let userInput;

do {
  userInput = prompt('Ввуди число 5');
  userInput = Number(userInput);
} while (userInput !== 5);

alert(`Ну і Дура, "${userInput}"!`);
