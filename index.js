//EXERCITIUL1

const exercitiu1 = (numar) => {
    console.log("Numar", numar);
    if (numar % 2 === 0) {
      console.log("numarul este par", numar - 2);
      return numar - 2;
    } else {
      console.log("numarul este impar", numar * 2);
      return numar * 2;
    }
  };
  
  /*const rezultat1 = exercitiu1(6);
  const rezultat2 = exercitiu1(5);
  console.log(rezultat1, rezultat2);*/
  
  //EXERCITIUL 2
  
  const arrForTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function testPrime(n) {
    if (n === 1) {
      return false;
    } else if (n === 2) {
      return true;
    } else {
      for (var x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  function isPrimeInFromArray(ar) {
    let a = [];
    for (let i = 0; i < ar.length; i++) {
      if (testPrime(ar[i])) {
        a.push(ar[i]);
      }
    }
    return a;
  }
  
  //console.log(isPrimeInFromArray(arrForTest));
  
  //EXERCITIUL 3
  
  const arrForTestEx3 = [1, "1", "salut", 2, 6, true, "true"];
  
  function mapArray(b) {
    a = [];
    b.forEach((b) => {
      if (typeof b === "string") {
        console.log("Doar string", b);
        a.push(b);
      }
    });
    return a;
  }
  
  //const t = mapArray(arrForTestEx3);
  
  //EXERCITIUL 4
  
  const number = 12345;
  
  function addDigits(nr) {
    const numberAsString = String(nr);
    let sumDigits = 0;
    numberAsString.split("").forEach((n) => {
      console.log(n);
      const backAsNumber = Number(n);
      sumDigits = sumDigits + backAsNumber;
    });
    return sumDigits;
  }
  
  function addDigits(nr) {
    const numberAsString = String(nr);
    let sumDigits = 0;
    const stringAsArray = numberAsString.split("");
    for (let i = 0; i < stringAsArray.length; i++) {
      const backAsNumber = Number(stringAsArray[i]);
      //console.log("backAsNumber", typeof backAsNumber);
      if (typeof backAsNumber !== NaN) {
        if (backAsNumber % 2 !== 0) {
          sumDigits = sumDigits + backAsNumber;
        }
        continue;
      }
    }
    return sumDigits;
  }
  
  //console.log(addDigits(number));
  
  //EXERCITIUL 5
  
  const moodday = "monday";
  
  switch (moodday) {
    case "monday":
      console.log("Nici iarba nu creste");
      break;
    case "tuesday":
      console.log("Second day after the weekend");
      break;
    case "wednesday":
    case "thursday":
      console.log("Midle of the week");
      break;
    case "friday":
      console.log("Almost Weekend");
      break;
    case "saturday":
    case "sunday":
      console.log("Weeeeekend");
      break;
    default:
      console.log("Concediu");
  }