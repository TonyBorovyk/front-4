// Частина _1_
// Завдання 1 _ Асоціативний масив

//  додаємо три пари "ключ-значення"
var array = new Map([
  [10, "value1"],
  [12, "value2"],
  [14, "value3"],
]);

array.size;

array.set(15, "value4");

array.delete(10);

// Завдання 2 _ Масиви
let arr = new Array();
arr.push(10);

// Завдання 3 _ Об'єкти
let person = new Object();
let person = {};

let person = {
  name: "Anton",
  age: 19,
};

for (let i in person) {
  console.log(i);
  console.log(person[i]);
}

let age = {
  Anton: 19,
  Andrey: 19,
  Peter: 10,
};

let summa = 0;

for (let i in age) {
  summa += age[i];
}

console.log(summa);
// Завдання 4 _ Рядки

let string1 = "Це рядок";
let string2 = "Hello";

for (let char of "Hello") {
  console.log(char);
}

console.log("anton".toUpperCase());

let string3 = "Hello";

console.log(string3.indexOf("o"));

// Завдання 5 _ Цикли

for (let i = 0; i < 100; i) {
  console.log(i);
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let array = [1, 2, 3];

for (let i in array) {
  console.log(array[i]);
}
// Частина _2_

// Завдання 1 _ Оголошення функції (function declaration)
function NameFunction() {
  return null;
}
console.log(NameFunction());

// Завдання 2 _ function expression
/* const myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
    statements
 };
 */
const sayHello = function () {
  return "Hello!";
};
console.log(sayHello());

// Завдання 3 _  Параметри
const multiplication = function (param1, param2) {
  return param1 * param2;
};
console.log(multiplication(10, 3));

// Завдання 4 _  Дефолтні значення параметрів
const multiplication1 = function (param1, param2 = 4) {
  return param1 * param2;
};
console.log(multiplication1(10));

// Завдання 5 _ Анонімні функції

const f = function () {
  console.log("Hello");
};

// Завдання 6 _  Передача анонімних функцій як параметрів

function doSomething(paramFunction) {
  paramFunction();
}
doSomething(function () {
  console.log("Викликаємо анонімну функцію");
});

// Завдання 7 _ Присвоєння функцій та їх подальший виклик*/

const parametr = function () {
  return "Hi";
};
const next_parametr = parametr;
next_parametr();

// Завдання 8 _  Cтрілочні функції та особливості ES6
let func_1 = (a) => a * a;

let func_2 = (a, b) => {
  return a + b;
};

console.log(func_1(3));

console.log(func_2(3, 4));

let myObj = {
  objName: "Aнтон",
  objAge: 19,
};
let objName = myObj.objName,
  objAge = myObj.objAge;

console.log(objName, objAge);

// Частина _3_

// Завдання 1 _ Продемонструвати різні варіанти замикань
function me() {
  let surname = "Borovyk";

  return function displaySurname() {
    console.log(surname);
  };
}
let Borovyk = me();
Borovyk(); // видасть Borovyk

function Mult(first_param) {
  return function (second_param) {
    return first_param * second_param;
  };
}
let multiplication_ = Mult(15);
console.log(multiplication_(10));

// Завдання 2 _ Продемонструвати паттерн "модуль"

let person = (function () {
  let data = { age: 10, name: "Mark" };

  return {
    birthday: function () {
      data.age += 1;
    },
    rename: function (n) {
      data.name = n;
    },
    display: function () {
      console.log(data.name + " , " + data.age + " років");
    },
  };
})();
person.birthday();
person.display();
person.rename("Tony");
person.display();

// Завдання 3 _ Продемонструвати замикання як обробник деякої події на html-сторінці; анонімна функція-обробник замикає в собі деякі дані і працює з ними

const func = function (id) {
  id.addEventListener("click", function () {
    id.style.color = "blue";
  });
};
let text = document.getElementById("text");
func(text);
