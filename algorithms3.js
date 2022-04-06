const minMax = function (min, max) {
  // Generate an array of 20 random numbers in the user's range (including min max)
  let arr = [];
  for (let i = 0; i < 20; i++) {
    let rando = randomGenerator(min, max);
    arr.push(rando);
  }
  // Console log the lowest and highest value in this array
  let currentMin = arr[0];
  let currentMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < currentMin) {
      arr[i] = currentMin;
    }
    if (arr[i] > currentMax) {
      arr[i] = currentMax;
    }
  }
  console.log(arr);
  console.log(`Minimum in random array of range ${min}-${max}: ${currentMin},
  \nMaximum: ${currentMax}`);
};

// Utility function to generate a random number in a range
function randomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Exercise 2*/
// Get current system time

function timeGreeting() {
  let currentTime = new Date();
  let timeObj = {
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
  };
  console.log(timeObj);

  // On page load alert a greeting depending on the time of day
  // 6:00-11:59 "Buenos dias",
  // 12:00 - 20:59 "Buenas tardes",
  // 21:00 - 05:59 "Buenas noches"
  if (timeObj.hours >= 6 && timeObj.hours < 12) {
    alert("Buenos dias");
  } else if (timeObj.hours >= 12 && timeObj.hours < 21) {
    alert("Buenas tardes");
  } else {
    alert("Buenas noches");
  }
}

/*Exercise 3*/
// Create 10 random hexadecimal codes
// A hex code is # plus six digits or chars from a to f
// A to F are Ascii codes 41 to 46
// Nums are from 30 to 39
function rainbowLog() {
  let options = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let hexArr = [];
  for (let i = 0; i < 10; i++) {
    let hexCode = "#";
    for (let j = 0; j < 6; j++) {
      let randomNum = randomGenerator(0, 15);
      hexCode += options[randomNum];
    }
    hexArr.push(hexCode);
  }

  // Console log "Hello World" in each hex color
  for (let k = 0; k < hexArr.length; k++) {
    let hexColor = hexArr[k];
    console.log("%c Hello World", `color: ${hexColor}`);
  }
}

/*Exercise 4*/
// Ask the user for a DNI

function dniValidator(dni) {
  const validDni = [];

  // Validate the DNI and inform the user of the validation
  // Modulo the 8 DNI numbers by 23 and ...
  // ... check if the char at the end of the dni ...
  // ...equals the one from the table
  // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
  // T R W A G M Y F P D X  B   N  J  Z  S  Q  V  H  L  C  K  E
  let rest = Number(dni.substring(0, 8)) % 23;
  const restTable = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  if (restTable[rest] === dni.charAt(8)) {
    // Save the DNI in a data structure if it is valid
    console.log("DNI is valid");
    validDni.push(dni);
  } else {
    console.log("DNI is invalid");
  }
}

/* Exercise 4 extra - random DNI */
// Create random valid DNI
function dniCreator() {
  let dni = "";
  for (let i = 0; i < 8; i++) {
    dni += randomGenerator(0, 9);
  }
  // Add the apropriate character to the end
  let rest = Number(dni.substring(0, 8)) % 23;
  const restTable = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  dni += restTable[rest];
  console.log(dni);
  // Check if our random dni is really valid
  dniValidator(dni);
}

/*Exercise 5 -create matriculas(license plate?)*/
// A license plate consists of 4 numbers and 3 letters
// NO VOCALS OR Q ALLOWED

function generateMatriculas(quantity) {
  for (let j = 0; j < quantity; j++) {
    let matricula = "";
    let chars = "";
    let nums = "";
    const validChars = [
      "B",
      "C",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "N",
      "P",
      "R",
      "S",
      "T",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    for (let i = 0; i < 4; i++) {
      chars += validChars[randomGenerator(0, validChars.length)];
    }
    for (let i = 0; i < 3; i++) {
      nums += randomGenerator(0, 9);
    }
    // Add both strings chars and nums
    chars += nums;

    // Mix together the random legal chars and nums
    for (let i = 0; i < 7; i++) {
      matricula += chars[randomGenerator(0, 6)];
    }
    console.log(matricula);
  }
}

/*Exercise 6 - dates*/
function printDate() {
  // create 20 dates of various themes (programming, work out, haircut, ...)
  // Save the dates in an array
  let dateArray = [
    "Time for your workout!",
    "Job interview, good luck!",
    "Programming bootcamp",
    "Get down to the barber for a haircut",
    "Time for a break",
    "Shopping for groceries",
    "Pick up your daughter from Kindergarden",
    "Another workout go go go",
    "Step-mothers birthday, dont forget present",
    "Technician coming over to fix Wifi",
    "Get a booster shot at Centro de Salud",
    "Get a nap zzzzzzzz",
    "Clean up",
    "Wipe the floor",
    "Do laundry, again...",
    "Car is dirty",
    "Car is broken",
    "Go to the doctor for a blood analysis",
    "Take a PCR test",
    "Bring kiddo to pediatrician",
  ];

  // Print a random date to the console
  console.log(dateArray[randomGenerator(0, 19)]);
}

// Print a date every 10 seconds
// Using setInterval to call the function in an interval of 10 seconds
// let myIntervall = setInterval(printDate, 10000);

// Stop printing dates after 2 minutes using setTimeout to clear the Interval
// after 2 minutes
// setTimeout(()=>{clearInterval(myIntervall)}, 120000);

/* Exercise 7 */
// Save 100 random numbers between 0 and 500 in an array
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(randomGenerator(0, 500));
}
// Filter all odd numbers
randomArray = randomArray.filter((x) => {
  return x % 2 == 0;
});

// Sort the array from largest to smallest
randomArray.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

// console.table(randomArray);

/* Exercise 8 */

// Play function
let wallet = 500;
// while(wallet > 0){
//   playRound(100);
// }


function playRound(bet) {
  // Ask player how much wants to bet
  let currentBet = bet;
  if (currentBet >= 500 || currentBet < 0) {
    alert("Invalid bet");
  } else {
    // Generate two random cards and show them in the console
    let playerCard = genCard("player");
    let bankCard = genCard("bank");
    let result = checkForWinner(playerCard, bankCard);
    if (result > 0) {
      console.log("Player wins");
      wallet += currentBet;
    } else if (result < 0) {
      console.log("Bank card wins");
      wallet -= currentBet;
    } else {
      console.log("Draw");
    }
    console.log(`Player wallet: ${wallet}`);
  }
}

// Generates a card
function genCard(user) {
  const deck = [
    ["spades", "clubs", "diamonds", "hearts"],
    ["ACE", "KING", "QUEEN", "JACK", 10, 9, 8, 7, 6, 5, 4, 3, 2],
  ];
  let suitNum = randomGenerator(0, 3);
  let cardNum = randomGenerator(0, 12);
  console.log(user+" card: "+deck[0][suitNum], deck[1][cardNum]);
  let card = [suitNum, cardNum];
  return card;
}

// Compare both cards and decide who won
// Left highest card -> so check for if lower (i.e. to the left)
function checkForWinner(card1, card2) {
  if (card1[1] < card2[1]) {
    return 1;
  } else if (card2[1] < card1[1]) {
    return -1;
  } else {
    // if both are same card check suite
    // From highest to lowest:
    // Spades, clubs, diamonds, hearts
    if (card1[0] > card2[0]) {
      return 1;
    } else if (card2[0] > card1[0]) {
      return -1;
    } else {
      return 0;
    }
  }
}

