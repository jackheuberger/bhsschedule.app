/*This file is just to break up the schedules into multiple files, and to be more efficient and use a function to
calculate the times of each separate schedule.*/
var dayArray;
if(getAWeek()){
  // A WEEK
  if (rightNow.getDay() == 1) {
    dayArray = [
      ["A Block starts [BEGIN AT BHS]", 30000000],
      ["A Block ends", 33600000],
      ["B Block starts", 33900000],
      ["B Block ends", 37500000],
      ["T Block starts [TRAVEL TO OLS]", 38700000],
      ["T Block ends", 40500000],
      ["D Block starts", 40740000],
      ["D ends @ 12:53, Lunch A starts", 46380000],
      ["D ends @ 12:53, Lunch A ends", 44100000],
      ["D ends @ 12:53, Lunch B starts", 44580000],
      ["D Block ends", 46380000],
      ["E Block starts", 46620000],
      ["E Block ends", 50220000],
      ["G Block starts", 50400000],
      ["G Block ends", 54000000]
    ];
  } else if (rightNow.getDay() == 2) {
    dayArray = [
      ["C Block starts [BEGIN AT OLS]", 29700000],
      ["C Block ends", 33300000],
      ["T or H Block starts", 33540000],
      ["T or H Block ends", 35640000],
      ["E Block starts", 35880000],
      ["E Block ends", 39480000],
      ["D Block starts", 39720000],
      ["D ends @ 12:53, Lunch A starts", 41760000],
      ["D ends @ 12:53, Lunch A ends", 43260000],
      ["D ends @ 12:53, Lunch B starts", 43560000],
      ["D Block ends", 45360000],
      ["F Block starts", 45600000],
      ["F Block ends", 49200000],
      ["G Block starts", 49500000],
      ["G Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 3) {
    dayArray = [
      ["A Block starts [BEGIN AT BHS]", 30000000],
      ["A Block ends", 33300000],
      ["B Block starts", 33600000],
      ["B Block ends", 36900000],
      ["C Block starts [TRAVEL TO OLS]", 37200000],
      ["C Block ends", 41400000],
      ["E Block/Lunch B start", 41700000],
      ["E ends @ 12:05, Lunch B ends", 43200000],
      ["E ends @ 12:05, Lunch A starts", 43500000],
      ["E ends @ 12:05, Lunch A ends", 45000000],
      ["E Block ends", 46800000],
      ["D Block starts", 47100000],
      ["D Block ends", 50400000],
      ["G Block starts", 50700000],
      ["G Block ends", 54000000]
    ]
  } else if (rightNow.getDay() == 4) {
    dayArray = [
      ["B Block starts [BEGIN AT BHS]", 30000000],
      ["B Block ends", 33900000],
      ["A Block starts", 34200000],
      ["A Block ends", 38100000],
      ["Lunch @ BHS", 38400000],
      ["Lunch @ BHS", 40200000],
      ["X Block starts", 40500000],
      ["X Block ends", 42900000],
      ["G Block starts [TRAVEL TO OLS]", 45000000],
      ["G Block ends", 48900000],
      ["F Block starts", 49200000],
      ["F Block ends", 53100000]
    ]
  } else if (rightNow.getDay() == 5) {
    dayArray = [
      ["B Block starts", 30600000],
      ["B Block ends", 34500000],
      ["C Block starts [TRAVEL TO OLS]", 35700000],
      ["C Block ends", 39300000],
      ["E Block starts", 39600000],
      ["E Block ends", 43500000],
      ["D Block/Lunch B start", 43800000],
      ["D ends @ 1:50, Lunch B ends/A starts", 45600000],
      ["D ends @ 1:50, Lunch A ends", 47400000]
      ["D Block ends", 49800000],
      ["F Block starts", 50100000],
      ["F Block ends", 54000000]
    ];
  }

  
} //B WEEK
else {
  if (rightNow.getDay() == 1) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33900000],
      ["C Block starts [TRAVEL TO OLS]", 35100000],
      ["C Block ends", 38700000],
      ["T Block starts", 38880000],
      ["T Block ends", 40680000],
      ["E Block starts", 40920000],
      ["E ends @ 12:57, Lunch A starts", 42720000],
      ["E ends @ 12:57, Lunch A ends", 44220000],
      ["E ends @ 12:57, Lunch B starts", 44820000]
      ["E Block ends", 46620000],
      ["F Block starts", 46800000],
      ["F Block ends", 50100000],
      ["G Block starts", 50400000],
      ["G Block ends", 54000000]
    ];
  } else if (rightNow.getDay() == 2) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33900000],
      ["B Block starts", 34200000],
      ["B Block ends", 38100000],
      ["C Block starts [TRAVEL TO OLS]", 39300000],
      ["C Block ends", 43200000],
      ["D Block/Lunch B start", 43500000],
      ["D ends @ 1:40, Lunch B ends/Lunch A starts", 45300000],
      ["D ends @ 1:40, Lunch A ends", 47100000],
      ["D Block ends", 49200000],
      ["F Block starts", 49500000],
      ["F Block ends", 53400000]
    ];
  } else if (rightNow.getDay() == 3) {
    dayArray = [
      ["A Block starts", 30000000],
      ["A Block ends", 33600000],
      ["B Block starts", 33900000],
      ["B Block ends", 37500000],
      ["T or H Block starts [TRAVEL TO OLS]", 38700000],
      ["T or H Block ends", 40500000],
      ["E Block starts", 40740000],
      ["E ends @ 12:53, Lunch A starts", 42540000],
      ["E ends @ 12:53, Lunch A ends", 44100000],
      ["E ends @ 12:53, Lunch B starts", 44580000],
      ["E Block ends", 46380000],
      ["F Block starts", 46620000],
      ["F Block ends", 49920000],
      ["G Block starts", 50160000],
      ["G Block ends", 54000000]
    ]
  } else if (rightNow.getDay() == 4) {
    dayArray = [
      ["C Block starts [BEGIN AT OLS]", 34500000],
      ["C Block ends", 38700000],
      ["D Block starts", 39000000],
      ["D Block ends", 42900000],
      ["F Block/Lunch B start", 43200000],
      ["F ends @ 1:45, Lunch B ends/Lunch A starts", 45000000],
      ["F ends @ 1:45, Lunch A ends", 47100000],
      ["F Block ends", 49500000],
      ["G Block starts", 49800000],
      ["G Block ends", 53700000]
    ]
  } else if (rightNow.getDay() == 5) {
    dayArray = [
      ["A Block starts [BEGIN AT BHS]", 34200000],
      ["A Block ends", 34500000],
      ["B Block starts", 34800000],
      ["B Block ends", 38700000],
      ["C Block starts [TRAVEL TO OLS]", 39900000],
      ["C Block ends", 43800000],
      ["D Block/Lunch B start", 44100000],
      ["D ends @ 1:50, Lunch B ends/Lunch A starts", 45900000],
      ["D ends @ 1:50, Lunch A ends", 47700000],
      ["D Block ends", 49800000],
      ["E Block starts", 50100000],
      ["E Block ends", 54000000]
    ];
  }
}
var dayMap = new Map(dayArray);
console.log("9th main calc");
calcTime(dayMap, "9thTime");