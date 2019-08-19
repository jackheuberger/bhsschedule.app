//var rightNow = new Date();
var rightNow = new Date(/*2019, 5, 17, 9, 20, 0*/);
var today = new Date(
  rightNow.getFullYear(),
  rightNow.getMonth(),
  rightNow.getDate()
);

var dayArray;

if (rightNow.getDay() == 1) {
  dayArray = [
    ["A Block starts", 30000000],
    ["A Block ends", 33600000],
    ["B Block starts", 33900000],
    ["B Block ends", 37500000],
    ["T Block starts", 37800000],
    ["T Block ends", 39600000],
    ["D Block [LUNCH] starts", 39900000],
    ["D Block ends", 45300000],
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
    ["F Block starts", 48300000],
    ["G Block starts", 48600000],
    ["G Block ends", 52500000]
  ];
} else if (rightNow.getDay() == 3) {
} else if (rightNow.getDay() == 4) {
} else if (rightNow.getDay() == 5) {
}

//Map of values, [block name, time in ms]

var dayMap = new Map(dayArray);
console.log(rightNow + " and " + today);
var target;
var targetKey;
//for each key...
for (var [key, value] of dayMap.entries()) {
  console.log(key + " = " + value);
  console.log(rightNow.getTime());
  console.log(today.getTime() + value);
  //if now is less than now + the next value in the array
  if (rightNow.getTime() < today.getTime() + value) {
    target = new Date(today.getTime() + value);
    console.log("TARGET " + target.getTime());
    targetKey = key;
    console.log(target.getHours() + " " + target.getMinutes());
    break;
  }
}

console.log(today.getTime() + "gettime today");
console.log(target.getTime() + "gettime target");

var timeUntil = new Date(
  today.getTime() + (target.getTime() - rightNow.getTime())
);
console.log(timeUntil);

//Returns a string, block starts in x min
var finalString = targetKey + " in ";

if (timeUntil.getHours() > 1) {
  finalString += timeUntil.getHours() + " hours";
} else if (timeUntil.getHours() == 1) {
  finalString += timeUntil.getHours() + " hour";
}

if (timeUntil.getHours() > 0 && timeUntil.getMinutes() > 0)
  finalString += " and ";

if (timeUntil.getMinutes() > 1) {
  finalString += timeUntil.getMinutes() + " minutes.";
} else if (timeUntil.getMinutes() == 1) {
  finalString += timeUntil.getMinutes() + " minute.";
} else if (timeUntil.getMinutes() === 0 && timeUntil.getHours() === 0){
  finalString += " less than one minute."
}
else if (timeUntil.getMinutes() === 0) finalString += ".";

document.getElementById("time").innerHTML = finalString;
