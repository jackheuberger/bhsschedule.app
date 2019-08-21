/*This file is just to break up the schedules into multiple files, and to be more efficient and use a function to
calculate the times of each separate schedule.*/
var dayArray;
if (getAWeek()) {
  // A WEEK
  if (rightNow.getDay() == 1) {
    dayArray = [
      ["A Block starts", 28800000],
      ["A Block ends", 32400000],
      ["B Block starts", 32640000],
      ["B Block ends", 38580000],
      ["T Block starts", 36480000],
      ["T Block ends", 38580000],
      ["D Block [LUNCH] starts", 38820000],
      ["D Block ends", 44460000],
      ["E Block starts", 44700000],
      ["E Block ends", 48300000],
      ["G Block starts [TRAVEL TO BHS]", 49500000],
      ["G Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 2) {
    dayArray = [
      ["C Block starts", 28800000],
      ["C Block ends", 33000000],
      ["E Block starts", 33300000],
      ["E Block ends", 37200000],
      ["D Block [LUNCH] starts", 37500000],
      ["D Block [LUNCH] ends", 43200000],
      ["F Block starts [TRAVEL TO BHS]", 44400000],
      ["F Block ends", 48300000],
      ["G Block starts", 48600000],
      ["G Block ends", 52500000]
    ];
  } else if (rightNow.getDay() == 3) {
    dayArray = [
      ["A Block starts", 28800000],
      ["A Block ends", 32100000],
      ["B Block starts", 32340000],
      ["B Block ends", 35940000],
      ["C Block [LUNCH] starts", 36180000],
      ["C Block [LUNCH] ends", 41580000],
      ["E Block starts", 41820000],
      ["E Block ends", 45120000],
      ["D Block starts", 45360000],
      ["D Block ends", 48660000],
      ["G Block starts [TRAVEL TO BHS]", 49800000],
      ["G Block ends", 53100000]
    ];
  } else if (rightNow.getDay() == 4) {
    dayArray = [
      ["B Block starts", 30300000],
      ["B Block ends", 34500000],
      ["A Block starts", 34800000],
      ["A Block ends", 39000000],
      ["X Block starts [TRAVEL TO BHS]", 40500000][("X Block ends", 42900000)],
      ["G Block [LUNCH] starts", 43200000],
      ["G Block [LUNCH] ends", 48900000],
      ["F Block starts", 49200000],
      ["F Block ends", 53100000]
    ];
  } else if (rightNow.getDay() == 5) {
    dayArray = [
      ["B Block starts", 28800000],
      ["B Block ends", 32100000],
      ["C Block starts", 32340000],
      ["C Block ends", 35940000],
      ["T or H Block starts", 36180000],
      ["T or H Block ends", 37980000],
      ["E Block [LUNCH] starts", 38220000],
      ["E Block [LUNCH] ends", 43860000],
      ["D Block starts", 44100000],
      ["D Block ends", 47700000],
      ["F Block starts [TRAVEL TO BHS]", 48900000],
      ["F Block ends", 52800000]
    ];
  }
} //B WEEK
else {
  if (rightNow.getDay() == 1) {
    dayArray = [
      ["A Block starts", 28800000],
      ["A Block ends", 32400000],
      ["T Block starts", 32640000],
      ["T Block ends", 34440000],
      ["C Block starts", 34680000],
      ["C Block ends", 38580000],
      ["E Block [LUNCH] starts", 38820000],
      ["E Block [LUNCH] ends", 44700000],
      ["F Block starts [TRAVEL TO BHS]", 46200000],
      ["F Block ends", 49500000],
      ["G Block starts", 49800000],
      ["G Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 2) {
    dayArray = [
      ["B Block starts", 28800000],
      ["B Block ends", 327000009],
      ["A Block starts", 33000000],
      ["A Block ends", 36900000],
      ["C Block [LUNCH] starts", 37200000],
      ["C Block [LUNCH] ends", 43200000],
      ["D Block starts", 43500000],
      ["D Block starts", 47400000],
      ["F Block starts [TRAVEL TO BHS]", 48600000],
      ["F Block ends", 52200000]
    ];
  } else if (rightNow.getDay() == 3) {
    dayArray = [
      ["A Block starts", 28800000],
      ["A Block ends", 32400000],
      ["B Block starts", 32700000],
      ["B Block ends", 36900000],
      ["T or H Block starts", 36600000],
      ["T or H Block ends", 38400000],
      ["E Block [LUNCH] starts", 38700000],
      ["E Block [LUNCH] ends", 44400000],
      ["F Block starts [TRAVEL TO BHS]", 45600000],
      ["F Block ends", 49200000],
      ["G Block starts", 49500000],
      ["G Block ends", 53100000]
    ];
  } else if (rightNow.getDay() == 4) {
    dayArray = [
      ["C Block starts", 34500000],
      ["C Block ends", 38100000],
      ["D Block starts", 38400000],
      ["D Block ends", 42000000],
      ["F Block [LUNCH] starts [TRAVEL TO BHS]", 43200000],
      ["F Block [LUNCH] ends", 49200000],
      ["G Block starts", 49500000],
      ["G Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 5) {
    dayArray = [
      ["A Block starts", 29700000],
      ["A Block ends", 33600000],
      ["B Block starts", 33900000],
      ["B Block ends", 37800000],
      ["C Block [LUNCH] starts", 38100000],
      ["C Block [LUNCH] ends", 43800000],
      ["D Block starts", 44100000],
      ["D Block ends", 48300000],
      ["E Block starts", 48600000],
      ["E Block ends", 52800000]
    ];
  }
}
var dayMap = new Map(dayArray);
console.log("9th OLS calc");
calcTime(dayMap, "OLStime");
