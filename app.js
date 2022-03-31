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

// let dni = prompt("Enter DNI please");

// function validateDNI(inputDNI) {
//   // Check if there are 8 digits
//   if(!(/^[0-9]{8}$/.test(inputDNI.substring(0, inputDNI.length - 1)))){
//       console.log(inputDNI.substring(0, inputDNI.length - 1));
//     return false;
//   }
//   // Check if last digit is a control character ?!
//   if(!(/[a-z]/i.test(inputDNI.charAt(inputDNI.length - 1)))){
//       return false;
//   }
//   return true;
// }

// console.log(validateDNI(dni));

/* Exercise 10: genera 2 números aleatorios, entre 1 y 6, 
para simular un juego de dados.
Comprueba los resultados obtenidos y muestra por consola el ganador. 
Por ejemplo: “Player 1 wins!”, o “draw”, en caso de empate */
// let userNumber = -1;
// do{
//     userNumber = prompt("Enter a Number from 1 to 6");
// } while (userNumber < 1 || userNumber > 6);

// let computerNumber = 1+Math.floor(Math.random()*6);
// console.log(computerNumber);

// EJERCICIOS 1 TO 5

// Ejercicio 1: Cuenta num letras en "Palindrome". Show each letter individually
// const word = "palindrome";
// // Try the lenght method
// console.log(word.length);
// for(let i = 0; i < word.length; i++){
//     console.log(word[i]);
// }

// Ejercicio 2: Show the letters of the palindrome "no lemon, no melon" revers
// let palindrome = "no lemon, no melon";
// let palindromeWithoutSpaces="";
// for(let i = 0; i<palindrome.length; i++){
//     if(palindrome[i]==" "){
//         continue;
//     }
//     palindromeWithoutSpaces+=palindrome[i];
// }

// let palindromeReverseWithoutSpaces="";
// for(let i = palindrome.length-1; i>=0; i--){
//     if(palindrome[i]==" "){
//         continue;
//     }
//     palindromeReverseWithoutSpaces+=palindrome[i];
// }
// if(palindromeWithoutSpaces===palindromeReverseWithoutSpaces){
//     console.log("Is a palindrome. So palindromeReverse == palindrome");
// }

// Ejercicio 3: Console.log a 4x4 grid of #
// let msg="";
// for(let i=0;i<4;i++){
//     for (let i = 0; i < 4; i++) {
//         msg+="#";
//     }
//     msg+="\n";
// }
// console.log(msg);

// Ejercicio 4: Escribe 4 vars con temps de los ultimos 7 dias segun google
// "https://api.openweathermap.org/data/2.5/weather?id=2514256&appid=502dff758bd2e181b8d6dab422fc99ae";
// let malaga = 6359472;
// let apiKey = "502dff758bd2e181b8d6dab422fc99ae";
// let lat = 36.7585;
// let lon = -4.3972;
// const lastSevenDays = [];
// function weatherBalloon(cityID) {
//   var key = apiKey;
//   fetch(
//     "https://api.openweathermap.org/data/2.5/onecall?lat=" +
//       lat +
//       "&lon="+
//       lon +
//       "&appid=" +
//       key
//   )
//     .then(function (resp) {
//       return resp.json();
//     }) // Convert data to json
//     .then(function (data) {
//       for(let i=0; i < 7; i++){
//           lastSevenDays.push(data.daily[i].temp.day)
//       }
//       calcAverage();
//     })
//     .catch(function () {
//       // catch any errors
//     });
// }

// window.onload = function () {
//   weatherBalloon(malaga);

// };

// // "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}"

// function calcAverage(){
//     function kelvinToCelsius(tempInKelvin){
//         return Math.floor(tempInKelvin - 273,15);
//     }

//     for(let i=0; i < 7; i++){
//        lastSevenDays[i]=kelvinToCelsius(lastSevenDays[i]);
//         console.log("Day "+i+" temp: " + lastSevenDays[i]);
//     }

//     const startVal = 0;
//     const sum = lastSevenDays.reduce((total, current)=>{
//         return total+current;
//     }, startVal);
//     console.log("Sum of daily temp: " + sum);
//     console.log("Weekly average: "+sum/7);
// }

// Exkurso: isPrime
// let num=5;

// function isPrime(num){
//     let isPrime=true;

//     for(let i = 2; i<num; i++){
//         if(num%i===0){
//             isPrime=false;
//             break;
//         }
//     }
//     return isPrime;
// }

// console.log(isPrime(num));

// // Give all primes from 1 to 100
// let primeArr=[];
// let max = 100;
// for(let i=2; i<max; i++){
//     if(isPrime(i)){
//         primeArr.push(i);
//     }
// }
// console.table(primeArr);

// Ejercicio 5: Genera un num aleatorio entre 0 y 10
// let min = 0;
// let max = 10;
// let random = Math.floor(Math.random()*(max-min+1))+min;
// let userInput;
// for(let i = 0; i < 3; i++){
//     userInput=prompt("Guess the number. Intent "+(i+1));
//     if (userInput===random){
//         console.log("You win");
//         break;
//     } else if(i<2) {
//         if(userInput<random){
//             console.log("Try higher");
//         } else {
//             console.log("Try lower");
//         }
//     } else {
//         console.log("Better luck next time. The random nr was: "+random);
//     }
// }

// Ejercicio 6: Create a random password of 8 chars
// let min = 97;
// let max = 122;
// let password = "";
// let includeUpper = prompt("Include Uppers? y or n") == "n" ? false : true;
// let includeNums = prompt("Include Nums? y or n") == "n" ? false : true;
// let includeSymbols = prompt("Include Symbols? y or n") == "n" ? false : true;

// if(includeUpper){
//     min=65;
// }
// if(includeNums){
//     min=48;
// }

// for(let i=0;i<8;i++){
//     password+=String.fromCharCode(Math.floor(Math.random()*(max-min+1)+min));
// }
// console.log(password);

// if (!withLowers && !withUppers && !withNumbers && !withSymbols) {
//   withLowers = !withLowers;
// }

// let star = {
//     name: "Polaris",
//     constellation: "Ursa Minor",
//     type: "Double/Cepheid",
//     spectralClass: "F7",
//     mag: 2.0
// };

// const person = {
//     name: "Juan",
//     lastName: "Beltran",
//     age: 5000,
//     address: {
//         typeOfStreet: "Avenue",
//         street: "Sunset Boulevard",
//         number: "1",
//         postalCode: 12345
//     },
//     sayHello: function() {
//         console.log(`Hi I'm ${this.name}`)
//     }
// }

// const login = {
//     id: 1,
//     state: {
//         logged: true,
//         online: false,
//     },
//     userName: "John",
//     loginAt: new Date().getUTCDate(),
//     toString: function(){
//         console.log(`Id: ${this.id}, state: ${this.state.logged} & ${this.state.online}
//         , username: ${this.userName}, last login at: ${this.loginAt}`);
//     }
// }

// const productFactory = function(product_id, name, price, quantity) {
//     let toString = function() {
//         return `Id: ${this.product_id}, name: ${this.name}, price: ${this.price}, quantity: ${this.quantity}`;
//     }
//     return {product_id, name, price, quantity};
// }

// const shoppingCart = [
//     productFactory(1, "Rubber Duck", 12, 1),
//     productFactory(2, "Book about Programming", 35, 1),
//     productFactory(3, "Fluffy Jacket", 200, 1),
//     productFactory(4, "Nintendo Switch", 350, 1),
// ]

// // for(let i = 0; i<shoppingCart.length; i++){
// //     console.log(shoppingCart[i].toString());
// // }

// // Solution without toString()
// for(let i = 0; i < shoppingCart.length; i++){
//     let msg="";
//     for(let key of Object.keys(shoppingCart[i])){
//         msg += `${key}: ${shoppingCart[i][key]}, `;
//     }
//     console.log(msg.substring(0,msg.length-2));
// }

// let numbers = [3,9,8,1,4];
// for (let index = 0; index < numbers.length - 2; index++) {
//     for (let j = 0; j < numbers.length - 1; j++) {
//         if(numbers[j]>numbers[j+1]){
//             let temp = numbers[j];
//             numbers[j] = numbers[j+1];
//             numbers[j+1] = temp;
//         }
//     }
// }

// Iterating arrays
// The for/of loop works with iterables
// let numbers = [1, 4, 6, 8],
//   sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// console.log(sum); // => 19

// // Iterating objects keys
// // The for/in loop
// let hero = {
//   character: "Iron Man",
//   name: "Tony Stark",
// };

// for (let key in hero) {
//   console.log(hero[key]); // Print the value of each
// }

// ["Aragorn", "Gandalf", "Nazgul"].forEach((item, indexi, x, y) =>
//   console.log(item + " " + indexi + " " + x + "  " + y)
// );

// "Soberano de Angmar en tiempos pasados".split(" ").forEach((letter) => {
//   console.log(letter);
// });

// The map() method
// returns a new array containing the values returned by the function
// let numbers1 = [1, 2, 3];
// let result1 = numbers1.map((item, index, array) => item * 2);
// console.log(result1); // [2, 4, 6]

// // The same done with forEach
// let numbers2 = [1, 2, 3];
// let numbers3 = [];
// let result2 = numbers2.forEach((item) => numbers3.push(item * 2));
// console.log(numbers3); // [2, 4, 6]

// // The filter() method
// // returns a sub-array.The function should be predicate (returns true or false).
// let numbers = [15, 10, 5, 0, -5, -10];
// let result = numbers.filter((x) => x < 5);
// console.log(result); // => [0, -5, -10]; values less than 5

// The every() and some() methods
// both return true or false, and their function must be predicate
// every requires a condition for all elements, some for some of them
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.every((item, index, array) => item > 2)); // false
// console.log(numbers.some((item, index, array) => item > 2)); // true

// let result = numbers.reduce((accum, item, index, array) => accum + item, 0);
// console.log(result); // 15
// result = numbers.reduceRight((accum, item, index, array) => accum + item, 0);
// console.log(result); // 15

// Nested arrays
let calendar = new Array(5); // 5 rows of the calendar
for (let i = 0; i < calendar.length; i++) {
  calendar[i] = new Array(7); // Each row has 7 columns
}
// Initialize the array
for (let row = 0, day = 1; row < calendar.length; row++) {
  for (let col = 0; col < calendar[row].length; col++) {
    if (day < 31) {
      calendar[row][col] = day++;
    } else if (day == 31) {
      calendar[row][col] = day++;
      day = 1;
    }
  }
}
console.log(calendar);
