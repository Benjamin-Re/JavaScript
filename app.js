// // Exercise 1: Print num days of current month to the console

// let getDays = function (month, year) {
//   /* Days are not zero indexed,
//      0 will give the last day of the previous month
//      Since month are 0 indexed, we can use them in non zero
//      indexed fashion. eg new Date(2022, 6, 0) -> 
//      Not july but last day of june!
//      */
//   return new Date(year, month + 1, 0).getDate();
// };

// let dateObj = new Date();
// let currentMonth = dateObj.getMonth();
// let currentYear = dateObj.getFullYear();

// console.log("The current month has "+ getDays(currentMonth, currentYear) + " days");

// // Exercise 2: Ask user for month and print days for month
// let inputMonth = null;
// do {
//   inputMonth = parseInt(prompt("Type a month between 0 and 11!"));
// } while (!validateMonth(inputMonth));

// function validateMonth(input){
//     if(isNaN(input)){
//         return false; 
//     }
//     if(input < 0 || input > 11) {
//         return false;
//     }
//     return true;
// }

// console.log("Your month has "+getDays(inputMonth, 2022)+" days!");

// /* Exercise 3: Ask user for temperature, < 15 output "Warm up"
// * , >=15<=25 output "Enjoy the weather",
// * > 25 output "Cool down"
// */

// let temperature;
// do {
//     temperature = prompt("What is the outside temperature?");
//     if(temperature < 15){
//         console.log("Warm up");
//     } else if (temperature >=15 && temperature <= 25) {
//         console.log("Enjoy the weather");
//     } else {
//         console.log("Cool down");
//     }
// } while(!validateTemperature(temperature));



// function validateTemperature(input){
//     if(isNaN(input)){
//         return false;
//     } else {
//         return true;
//     }
// }

// /* Traffic light with control variable isGreen
// log "Cross the road" if light is green
// log "Please wait" if light is red */

// let isGreen = true;
// function checkLight(){
//     if(isGreen){
//         console.log("Cross the road!");
//     } else {
//         console.log("Please wait!");
//     }
//     isGreen = !isGreen;
// }

// let inter = setInterval(checkLight, 5000);

// window.addEventListener("keydown", event => {
//     console.log(event.key);
//     if(event.key === "c"){
//         clearInterval(inter);
//     }
// })

// /* Exercise 5: Translate temperatures from Celsius to Fahrenheit */
// // (0 °C × 9/5) + 32 = 32 °F

// function toFahrenheit(tempInCelsius){
//     return (tempInCelsius*9/5)+32;
// }

// console.log("Absolute Zero in F: "+ toFahrenheit(-273.15));
// console.log("Freezing point in F: " + toFahrenheit(0));
// console.log("Body temp in F: " + toFahrenheit(37));
// console.log("Boiling temp in F: " + toFahrenheit(100));

// // (32 °F − 32) × 5/9 = 0 °C

// function toCelsius(tempInFahrenheit){
//     return (tempInFahrenheit - 32) * 5/9;
// }

// console.log("Absolute Zero in C: "+toCelsius(-459.67));
// console.log("Freezing point in C: "+ toCelsius(32));
// console.log("Body temp in C: "+toCelsius(98.6));
// console.log("Boiling temp in C" +toCelsius(212));

// /* Exercise 6: ASk user for name and pw */
// let email = "tolkien@lordofrings.com";
// let pw = "aNBR6ZeWPY";

// let inputEmail = prompt("Enter email");
// let inputPW = prompt("Enter password");

// if(inputEmail===email && inputPW === pw){
//     console.log("Welcome Mr. Tolkien");
// } else {
//     console.log("Wrong password or username");
// }

/* Exercise 7: Using switch, convert € to $, Yen, Pound, Swiss Francs */
// 1 € = 1.10 $

// let currency;
// let amount;

// function convertCurrency(currency, amount) {
//     switch(currency) {
//         case "dollar":
//             console.log(`${amount}€ are ${amount*1.1}$`);
//             break;
//         case "yen":
//             console.log(`${amount}€ are ${amount*131,59}Yen`);
//             break;
//         case "pound":
//             console.log(`${amount}€ are ${amount*0.84}Pound sterling`);
//             break;
//         case "francs":
//             console.log(`${amount}€ are ${amount*1.03}Swiss francs`);
//             break;
//         default:
//             console.log(currency+" "+amount);
//             console.log("Conversion failed");
//     }
// }

// convertCurrency(prompt("currency: dollar, yen, pound, francs"), +prompt("amount in €"));

// /* Exercise 8: Ask user for two numbers and an operation and return the result */
// function doTheMath(a, b, operator){
//     switch (operator){
//         case "add":
//             return a+b;
//         case "subtract":
//             return a-b;
//         case "multiply":
//             return a*b;
//         case "divide":
//             if(b===0){return "can't divide by zero, sorry"};
//             return a/b;
//         default:
//             return "Operation failed.";
//     }
// }

// console.log(doTheMath(+prompt("a"), +prompt("b"), prompt("operator")));

/* Exercise 9: Ask user for DNI / NIE. 
• El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni
guiones. Ejemplo: X0523821F.
• El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
*/

// let nie = prompt("Enter your NIE pls");
// console.log(validateNIE(nie));

// function validateNIE(inputNie) {
//   // The first char must be T or X
//   if (nie.charAt(0) !== "T" && nie.charAt(0) !== "X") {
//       console.log("First letter is not T or X");
//       return false;
//   }
//   // The last char must be a capital letter
//   if (
//     nie.charCodeAt(nie.length - 1) < 65 ||
//     nie.charCodeAt(nie.length - 1) > 90
//   ) {
//       console.log("Last letter is not a char");
//       return false;
//   }
//   // The digits between must be numbers
//   let middle = nie.substring(1, nie.length - 1);
//   if(!(/^[0-9]+$/.test(middle))){
//       console.log("The middle must be numbers only");
//     return false;
//   }
//   return true;
// }

let dni = prompt("Enter DNI please");
// Check if there are 8 digits
/^[0-9]{8}$/.test(dni.substring(0,dni-length-2));
// Check if last digit is a control character ?!
