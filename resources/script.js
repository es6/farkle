/*
functions:
  - start game
  - start round
  - add players
  - round score calculator
  - game score calculator
  - die handler (how many dies are active to calculate)
  - round over handler
  
  
  idea2:
  - triplet function (calculates score when there is a triplet - num * 100)
  - 
*/

const COMBO_KEY = {
  1: 100,
  5: 50,
  tri_2: 200,
  tri_3: 300,
  tri_4: 400,
  tri_5: 500,
  tri_6: 600,
  four_kind: 1000,
  five_kind: 2000,
  six_kind: 3000,
  straight: 1500,
  tri_pair: 1500,
  four_pair: 1500,
  two_tri: 2500,
};

let ROUND_SCORE = 0;
let PLAYER_TOTAL_SCORE = 0;

// Testing
// score of 250
let myRoll = [1, 1, 2, 5, 4];
// score of 200
let myNextRoll = [1, 1];
// total score of 450
let myTotalRoundScore = 0;

function roll(numOfDie) {
  // randomly generate die rolls
  let rolls = new Array;
  for (i = 0; i < numOfDie; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return rolls;
}

function translateDieToCombos(arr) {
  // arr = [2,2,2,1,1,3]
  // output: ["tri_2",1,1]

  let rollCount = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  };

  let translatedCombo = [];

  let rollLength = arr.length;
  arr.forEach(num => {
    rollCount[num]++;
  });
  // returns {1: 1, 2:3, ...}

  let singleHolder = [];
  let pairHolder = [];
  let tripleHolder = [];
  let quadHolder = [];
  let fiveHolder = [];
  let sixHolder = [];
  Object.keys(rollCount).forEach(key => {
    switch (rollCount[key]) {
      case 1:
        singleHolder.push(rollCount[key]);
      case 2:
        pairHolder.push(rollCount[key]);
        break;
      case 3:
        tripleHolder.push(rollCount[key]);
        break;
      case 4:
        quadHolder.push(rollCount[key]);
        break;
      case 5:
        fiveHolder.push(rollCount[key]);
        break;
      case 6:
        sixHolder.push(rollCount[key]);
        break;
    }
  });

  if (sixHolder.length != 1) {
    if (fiveHolder.length != 1) {
      if (quadHolder.length != 1) {
        if (tripleHolder != 1) {
          if (pairHolder == 3) {
            translatedCombo.push("tri_pair");
          }
          if (singleHolder == 6) {
            translatedCombo.push("straight");
          }
        } else {
          if (tripleHolder == 2) {
            translatedCombo.push("two_tri");
          } else {
            // account for different types number triples
          }
        }
      } else {
        if (pairHolder == 1) {
          translatedCombo.push("four_pair");
        } else {
          translatedCombo.push("four_kind");
        }
      }
    } else {
      translatedCombo.push("five_kind");
    }
  } else {
    translatedCombo.push("six_kind");
  }


}

function calculateComboScore(arr) {
  // take in current round die values - in arr form
  // arr = [3,1,6,2,1,3]
}

function addToRoundScoreTotal(num) {
  // add to ROUND_SCORE
}

function resetRoundScoreTotal() {
  ROUND_SCORE = 0;
}

function farkle(arr) {
  // determines if current roll (arr) is a farkle
}

function disableDie(die) {
  // disables die from rolling
}