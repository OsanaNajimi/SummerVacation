//JavaScript != JAVA
//ES6 ECMAScript
var text = 'hello';
var number = 5;
//console.log(typeof Number);

var number1 = 10;
var number2 = 97.8;
//var number2 = '97';
var number3 = number1 + number2;
//console.log('number3=' + number3)
//console.log(number1 !== number2); not  the same
//console.log(number1 === number2); the same
//console.log(number1 > number2); bigger
var budget = 40000;
budget = budget + 123456789
if (budget >= 50000) {
    console.log('We have ' + budget + ' go to Europe')
} else if (budget >= 10000 && budget < 50000) {
    console.log('We have ' + budget + '  go to Japan')
} else {
    console.log('We have ' + budget + ' your poor')
};

function addNumbers_yee(a, b) {
    var number = a + b;
    console.log(number);
}
addNumbers_yee(15, 97);

/*var dog = {
    name: 'blacky',
    age: 5,
    breed: 'stupid',
}

console.log(dog.name);*/

var Dogs = function (name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
};

var dog1 = new Dogs('blacky', 6, 'stupid')
var dog2 = new Dogs('Bob', 9, 'yee')
console.log('這隻狗的名字是' + dog1.name + '現在' + dog1.age + '歲,品種是' + dog1.breed);
console.log('這隻狗的名字是' + dog2.name + '現在' + dog2.age + '歲,品種是' + dog2.breed);
