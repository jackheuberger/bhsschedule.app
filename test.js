//var rightNow = new Date();
var rightNow = new Date(2019, 5, 17, 2, 58);
var today = new Date(
  rightNow.getFullYear(),
  rightNow.getMonth(),
  rightNow.getDate()
);

var monArray = [["A Block starts", 30000000], ["A Block ends", 33000000]];
var monMap = new Map(monArray);
console.log(rightNow + " " + today);
var target;
var targetKey;
for (var [key, value] of monMap.entries()) {
  console.log(key + " = " + value);
  if (rightNow.getMilliseconds() < today.getTime() + value) {
    target = new Date(today.getTime() + value);
    targetKey = key;
    console.log(target.getHours() + " " + target.getMinutes());
    break;
  }
}

var finalString =
  targetKey +
  " in " +
  (target.getHours() - rightNow.getHours()) +
  ":" +
  (target.getMinutes() - rightNow.getMinutes());

document.getElementById("time").innerHTML = finalString;
