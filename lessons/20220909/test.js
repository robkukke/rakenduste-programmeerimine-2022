console.log('Hi');

function sayHi() {
    return 'Hi from sayHi()';
}

console.log(sayHi());

const arrowFunction = () => {
    return 'Hello from arrowFunction()';
};

console.log(arrowFunction());

const shortArrowFunction = () => 'Hello from shortArrowFunction()';

console.log(shortArrowFunction());

// Kirjutage 3 funktsiooni tüüpi, a ja b ja returnib summa, sum(3, 4) => 7
function sum(a, b) {
    return a + b;
}

console.log('sum():', sum(3, 4));

const arrowSum = (a, b) => {
    return a + b;
};

console.log('arrowSum():', arrowSum(3, 4));

const shortArrowSum = (a, b) => a + b;

console.log('shortArrowSum():', shortArrowSum(3, 4));

const sumA = a => b => a + b;

console.log('sumA():', sumA(3)(4));

// Kirjutada see ümber kujuna function sumA(3) { ... }
function sumB(a) {
    return function(b) {
        return a + b;
    }
}

console.log('sumB():', sumB(3)(4));

// map() võimaldab rakendada mingit funktsiooni olemasolevale massiivile, tagastab uue massiivi
const array = [1, 2, 3, 4];
const map = array.map(x => x * 2);

console.log('map():', map);

// filter() võimaldab olemasolevat massiivi filtreerida mingi tingimuse põhjal, tagastab uue massiivi
const strings = ["1", "12", "123", "1234", "12345", "123456"];
const filter = strings.filter(string => string.length < 5);

console.log('filter():', filter);

// reduce() võimaldab olemasoleva massiivi väärtused järkjärgult üheks teha (nt. liitmine, korrutamine jne)
const sumReduce = array.reduce((accumulated, current) => accumulated + current, 0);

console.log('reduce():', sumReduce);

// Näide object literal'i ja shorthandi kohta
const randomObject = {
    a: 1,
    b: 2
};

console.log({ randomObject: randomObject });
console.log({ randomObject });

// Näide object literal'i ja spread syntax'i (...) kohta
const a = {
    a: 1,
    b: 2
};

const b = {
    ...a,
    c: 3
};

console.log({ b }); // { a: 1, b: 2, c: 3 }

// Näide key-value explicit'i ja shorthand'i kohta
const person = {
    name: 'Mari',
    age: 25
};

console.log({
    person1: {
        name: 'Juku',
        age: 10
    },
    person: person,
    'suvaline nimetus': person,
    person
});