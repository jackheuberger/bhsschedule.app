//var rightNow = new Date();
//                   year, month, day, hour, min, second
var rightNow = new Date(/*2019, 7, 21, 8, 59, 0*/);
var today = new Date(
  rightNow.getFullYear(),
  rightNow.getMonth(),
  rightNow.getDate()
);

//THIS IS IT
var aWeek = true;


function getAWeek(){
  return aWeek;
}


if (aWeek) {
  document.getElementsByClassName("bhsJumbo")[0].style.backgroundColor =
    "#5FA8D3";
  console.log("It's A week!");
} else {
  document.getElementsByClassName("bhsJumbo")[0].style.backgroundColor =
    "#FF6F59";
  console.log("It's B week!");
}

function calcTime(dayMap, id) {
  if(rightNow.getDay() != 6 && rightNow.getDay() != 7){
    console.log(id + " called function!!!")
    console.log(rightNow + " is rn. today is " + today);
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
  
    console.log(today.getTime() + " gettime today");
    console.log(target.getTime() + " gettime target");
  
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
      finalString += timeUntil.getMinutes() + 1 + " minutes.";
    } else if (timeUntil.getMinutes() == 1) {
      finalString += timeUntil.getMinutes() + " minute.";
    } else if (timeUntil.getMinutes() === 0 && timeUntil.getHours() === 0) {
      finalString += " less than one minute.";
    } else if (timeUntil.getMinutes() === 0) finalString += ".";
  
    document.getElementById(id).innerHTML = finalString;
  } else {
    console.log("WEEKEND")
  document.getElementById(id).innerHTML = "Have a good weekend!";
  }
  
}
