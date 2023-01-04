const cars = ["Saab", "Volvo", "BMW"];
console.log(cars.length);   // Returns the number of elements
console.log(cars.sort());  // Sorts the array


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}


function toUpper(string) {
	return string.toUpperCase();
  }
  
//   const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


  const filtered = cats.filter((cat) => cat.startsWith('L'));
  console.log(filtered);
  // [ "Leopard", "Lion" ]


// ------------------------------------------------------------------


const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  para.textContent = '';
  for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === '') {
   para.textContent = 'Contact not found.';
 }
});









