/*This file is just to break up the schedules into multiple files, and to be more efficient and use a function to
calculate the times of each separate schedule.*/
var dayArray;
if(getAWeek()){
  // A WEEK
  if (rightNow.getDay() == 1) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33600000],
      ["B Block starts", 33900000],
      ["B Block ends", 37500000],
      ["T Block starts", 37800000],
      ["T Block ends", 39600000],
      ["D Block [LUNCH] starts", 39900000],
      ["D Block [LUNCH] ends", 45300000],
      ["E Block starts", 45600000],
      ["E Block ends", 49200000],
      ["G Block starts", 49500000],
      ["G Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 2) {
    dayArray = [
      ["C Block starts", 30000000],
      ["C Block ends", 33900000],
      ["E Block starts", 34200000],
      ["E Block ends", 38100000],
      ["D Block [LUNCH] starts", 38400000],
      ["D Block [LUNCH] ends", 44100000],
      ["F Block starts", 44400000],
      ["F Block ends", 48300000],
      ["G Block starts", 48600000],
      ["G Block ends", 52500000]
    ];
  } else if (rightNow.getDay() == 3) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33300000],
      ["B Block starts", 33600000],
      ["B Block ends", 36900000],
      ["C Block starts", 37200000],
      ["C Block ends", 40500000],
      ["E Block [LUNCH] starts", 40800000],
      ["E Block [LUNCH] ends", 45900000],
      ["D Block starts", 46200000],
      ["D Block ends", 49500000],
      ["G Block starts", 49800000],
      ["G Block ends", 53100000]
    ]
  } else if (rightNow.getDay() == 4) {
    dayArray = [
      ["B Block starts", 30000000],
      ["B Block ends", 33900000],
      ["A Block starts", 34200000],
      ["A Block ends", 38100000],
      ["T Block starts", 38400000],
      ["T Block ends", 40500000],
      ["X Block ends", 42900000],
      ["G Block [LUNCH] starts", 43200000],
      ["G Block [LUNCH] ends", 48900000],
      ["F Block starts", 49200000],
      ["F Block ends", 53100000]
    ]
  } else if (rightNow.getDay() == 5) {
    dayArray = [
      ["B Block starts", 30600000],
      ["B Block ends", 34500000],
      ["C Block starts", 34800000],
      ["C Block ends", 38400000],
      ["E Block starts", 38700000],
      ["E Block ends", 42600000],
      ["D Block [LUNCH] starts", 42900000],
      ["D Block [LUNCH] ends", 48600000],
      ["F Block starts", 48900000],
      ["F Block ends", 52800000]
    ];
  }
} //B WEEK
else {
  if (rightNow.getDay() == 1) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33900000],
      ["T Block starts", 34200000],
      ["T Block ends", 36000000],
      ["C Block starts", 36300000],
      ["C Block ends", 39900000],
      ["E Block [LUNCH] starts", 40200000],
      ["E Block [LUNCH] ends", 45900000],
      ["F Block starts", 46200000],
      ["F Block ends", 49500000],
      ["G Block starts", 49800000],
      ["G Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 2) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33900000],
      ["B Block starts", 34200000],
      ["B Block ends", 38100000],
      ["C Block [LUNCH] starts", 38400000],
      ["C Block [LUNCH] ends", 44100000],
      ["D Block starts", 44400000],
      ["D Block ends", 48300000],
      ["F Block starts", 48600000],
      ["F Block ends", 52200000]
    ];
  } else if (rightNow.getDay() == 3) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33600000],
      ["B Block starts", 33900000],
      ["B Block ends", 37500000],
      ["X Block starts", 37800000],
      ["X Block ends", 39600000],
      ["E Block [LUNCH] starts", 39900000],
      ["E Block [LUNCH] ends", 45300000],
      ["F Block starts", 45600000],
      ["F Block ends", 49200000],
      ["G Block starts", 49500000],
      ["G Block ends", 53100000]
    ]
  } else if (rightNow.getDay() == 4) {
    dayArray = [
      ["C Block starts", 34800000],
      ["C Block ends", 38700000],
      ["D Block starts", 39000000],
      ["D Block ends", 42900000],
      ["F Block [LUNCH] starts", 43200000],
      ["F Block [LUNCH] ends", 49200000],
      ["G Block starts", 53100000],
      ["G Block ends", 53400000]
    ]
  } else if (rightNow.getDay() == 5) {
    dayArray = [
      ["A Block starts", 30600000],
      ["A Block ends", 34500000],
      ["B Block starts", 34800000],
      ["B Block ends", 38700000],
      ["C Block starts", 39000000],
      ["C Block ends", 42900000],
      ["D Block [LUNCH] starts", 43200000],
      ["D Block [LUNCH] ends", 48900000],
      ["E Block starts", 49200000],
      ["E Block ends", 52800000]
    ];
  }
}
var dayMap = new Map(dayArray);
console.log("BHS main calc. The BHS schedule is " + dayArray);
calcTime(dayMap, "bhsTime");