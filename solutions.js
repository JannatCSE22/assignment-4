//Problem 1: radianToDegree

function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Error: Please enter a valid number.";
  }
  //1 rad = (180/pi)
  const oneRadian = 180 / Math.PI;
  const degree = radian * oneRadian;
  const degreeTwoDecimal = degree.toFixed(2);
  const numberDegree = parseFloat(degreeTwoDecimal);
  return numberDegree;
}

//Problem 2: isJavaScriptFile

function isJavaScriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "Error: Please enter a valid file name";
  }

  const fileNameLowerCase = fileName.toLowerCase();

  const filetype = fileNameLowerCase.substring(
    fileNameLowerCase.lastIndexOf(".") + 1
  );

  if (filetype === "js") {
    return true;
  } else {
    return false;
  }
}

//Problem 3: oilPrice

function oilPrice(diesel, petrol, octane) {
  if (
    typeof diesel !== "number" ||
    typeof petrol !== "number" ||
    typeof octane !== "number"
  ) {
    return "Error: Please enter a valid number.";
  }

  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;

  const totalCost = diesel * dieselPrice + petrol * petrolPrice + octane * octanePrice;
  return totalCost;
}

//Problem 4: publicBusFare

function publicBusFare(numberOfPeople) {
  if (typeof radian !== "number") {
    return "Error: Please enter a valid number.";
  }

  let restForMicroBus = 0;
  let restForLocalBus = 0;
  if (numberOfPeople >= 50) {
    restForMicroBus = numberOfPeople % 50;

    if (restForMicroBus >= 11) {
      restForLocalBus = restForMicroBus % 11;
    } else {
      restForLocalBus = restForMicroBus;
    }
  } else if (numberOfPeople >= 11) {
    restForLocalBus = numberOfPeople % 11;
  } else {
    restForLocalBus = numberOfPeople;
  }

  const totalCostForPublicBus = restForLocalBus * 250;

  return totalCostForPublicBus;
}

//Problem 5: isBestFriend

function isBestFriend(person1, person2) {
  //are parameters object?
  if (typeof (person1, person2) !== "object") {
    return "Enter valid input";
  } else {
    //if parameters are object then check if there are any array.
    if (
      Array.isArray(person1) === true ||
      Array.isArray(person2) === true
    ) {
      return "Enter valid input";
    } else {
      //if object properties are string?
      if (
        typeof person1.name !== "string" ||
        typeof person1.friend !== "string" ||
        typeof person2.name !== "string" ||
        typeof person2.friend !== "string"
      ) {
        return "Enter valid input";
      } else {
        //checking they are best friend or not.
        if (
          person1.name.toLowerCase() ===
            person2.friend.toLowerCase() &&
          person2.name.toLowerCase() === person1.friend.toLowerCase()
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
