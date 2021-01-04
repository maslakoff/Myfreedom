// ES6+ 2015

let a = 5;
console.log(a);

/*
Не начинать с цифры
Регистрозависимость

number_of_people - работает, но не рекомендуется
numberOfPeople - правильно (camelCase)
number-of-people - не допускается, но может приходить с сервера

*/

// Типы данных

let number = 11; // число, number

console.log(typeof(a));

let string = 'Some text'; // строка, string
console.log(typeof(string));

// let boolean = true;  boolean, булевый тип
let boolean = 5 > 8;
console.log (boolean);

// 'Some text like "hello"'

let nullType = null; // null, пустота

let someVariable = undefined; // indefined, значение не определено, 'косяк'

let name;
console.log (name);

let students = ['Anya' , 'Olya', 'Max', 'Maya']; // массив, array
// Каждый элемент - индекс, начинается с 0

let cat = {
    name: 'Milka',
    age: 7,
    color: 'bege',
    canDo: function(){
        eat()
    }
} // объект, object

// Операторы
// +, -, *, /, %

let userAge = prompt('Сколько Вам лет?');
console.log(userAge);

let num1 = 33;
let num2 = 2;
let sum = num1 + num2;
console.log(sum);

// console.log('Результат произведения чисел: ' (num1 * num2));
 let result = 'Результат произведения чисел: ' + (num1 * num2); // Конкатенация строк
 console.log(result);
 console.log(typeof(result));
 
 alert('Hello, ' + prompt('Как тебя зовут?'));

 /*
 
 */