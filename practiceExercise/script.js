console.log('hey');
let message = 'Be BOLD!';
alert(message);

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);
