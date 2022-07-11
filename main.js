// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

function validateCred(arr){
  let card = [...arr];
  
  // Luhn algorithm (card number validation algorithim)
  for(let i =card.length - 2; i >= 0; i -= 2){
    if(card[i] * 2 > 9){
      card[i] = (card[i] * 2) - 9;
    } else{
      card[i] = (card[i] * 2);
    }
  }
  
  let counter = 0;
  for(let i = 0; i < card.length; i++){
    counter += card[i];
  }
  
  if(counter % 10 === 0){
    return 1;
  } else{
    return 0;
  }
}

//console.log(validateCred(invalid3));  testing the validator function

// find all invalid cards within the bunch
function findInvalidCards(arr){
  return arr.filter((element) => validateCred(element) === 0);
}

let invalids = findInvalidCards(batch);
console.log(invalids);


// check which companies issued an invalid cards
function idInvalidCardCompanies(invalids){
  let invalidCardCompanies = [];
  let amex = 'Amex (American Express)';
  let visa = 'Visa';
  let mastercard = 'Mastercard';
  let discover = 'Discover';

  for(let i =0; i< invalids.length; i++){
    if (invalids[i][0] === 3 && invalidCardCompanies.indexOf(amex) === -1){
      invalidCardCompanies.push(amex);
    } else if(invalids[i][0] === 4 && invalidCardCompanies.indexOf(visa) === -1){
        invalidCardCompanies.push(visa);
    } else if (invalids[i][0] === 5 && invalidCardCompanies.indexOf(mastercard) === -1){
          invalidCardCompanies.push(mastercard);
    } else if (invalids[i][0] === 6 && invalidCardCompanies.indexOf(discover) === -1) {
        invalidCardCompanies.push(discover);
    } else{
      console.log("Company not found");
    }
  }
    return invalidCardCompanies; 
}

let cardCompanies = idInvalidCardCompanies(invalids);

console.log(cardCompanies);

// convert string input to number array
let text = "12345678910111213141516";   // example input
const myArray = text.split("").map(digit => {
    return parseInt(digit, 10);
});
