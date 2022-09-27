//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//A simple Calendar
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
    const choice = select.value;

    // ADD CONDITIONAL HERE
    if (choice === "February") {
        createCalendar(28, choice);
    } else if (choice === "January" || choice === "March" || choice === "May" || choice === "July" || choice === "August" || choice === "October" || choice === "December") {
        createCalendar(31, choice);
    } else {
        createCalendar(30, choice);
    }

    createCalendar(days, choice);
});

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}



// More color choices

const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
	switch(choice){
		case "white":
			update("black", "white");
			break;
		case "black":
			update("white", "black");
			break;
		case "purple":
			update("black", "purple");
			break;
		case "yellow":
			update("black", "yellow");
			break;
		case "psychedelic":
			update("black", "psychedelic");
			break;
		
	}
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

