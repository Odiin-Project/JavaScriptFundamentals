/**
 * ===== Launch countdown =====
 * In this exercise, we want you to print out a simple launch countdown 
 * to the output box, from 10 down to Blastoff.
 */

// let output = document.querySelector('.output');
// output.innerHTML = '';

// for(let i = 10; i >= 0; i--){

// 	 const para = document.createElement('p');
// 	if ( i === 10){
// 		para.textContent =  `Countdown ${i}`;
// 		output.appendChild(para);

// 	} else if ( i === 0){
// 		para.textContent =  `Blast Off ${i}`;
// 		output.appendChild(para);

// 	}
// 	else{
// 	 para.textContent = i;
// 	 output.appendChild(para);
// 	}
// }
// output.appendChild(para);
 

// Alternative Solution

const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}


/**
 * ===== Filling in a guest list =====
 * In this exercise, we want you to take a list of names stored 
 * in an array and put them into a guest list. But it's not quite 
 * that easy — we don't want to let Phil and Lola in because they are 
 * greedy and rude, and always eat all the food!
 */

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';


for(const person of people){
	if(person === 'Phil' || person === 'Lola'){
		refused.textContent += `${person}, `;
	}else{
		admitted.textContent += `${person}, `;
	}
}