/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

 function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	// result = "a" + "b";
	// Corrected Line
	result = a + b;
    
	// =================================

	return result;
}

document.getElementById("demo").innerHTML = troubleshooting();


// ***********************************************************************

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

 number = Number(prompt("enter a number"));

//  function numberChecker() {
// 	 if(number === 6) {
// 		 console.log("true");
// 		 return true;
// 	 } else {
// 		console.log("false");
// 		 return false;
// 	 }
//  }

// Corrected Lines

 function numberChecker() {
	if(number >= 10) {
		console.log("true");
		return true;
	} else {
	   console.log("false");
		return false;
	}
}

 numberChecker();
