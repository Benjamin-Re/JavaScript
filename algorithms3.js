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
    const restTable = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "H", "L", "C", "K", "E"];
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
  const restTable = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "H", "L", "C", "K", "E"];
  dni += restTable[rest];
  console.log(dni);
  // Check if our random dni is really valid
  dniValidator(dni);
}

/*Exercis 5 -create matriculas(license plate?)*/
// A license plate consists of 4 numbers and 3 letters
// No vocals or Q allowed

function generateMatriculas(quantity) {
  for(let j=0; j<quantity; j++){
    let matricula = "";
    let chars = "";
    let nums = "";
    const validChars = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (let i = 0; i < 4; i++) {
      chars += validChars[randomGenerator(0, 21)];
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
  let dateArray = ["Time for your workout!",
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
    "Bring kiddo to pediatrician"];

  // Print a random date to the console
  console.log(dateArray[randomGenerator(0, 19)]);
}

// Print a date every 10 seconds
// Using setInterval to call the function in an interval of 10 seconds
let myIntervall = setInterval(printDate, 10000);

// Stop printing dates after 2 minutes using setTimeout to clear the Interval
// after 2 minutes
// setTimeout(()=>{clearInterval(myInterval)}, 120000);
