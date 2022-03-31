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

function DniValidator() {
    let dni = prompt("DNI please");

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

 