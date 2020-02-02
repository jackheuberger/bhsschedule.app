//var rightNow = new Date();
//                     year, month, day, hour, min, second
var rightNow = new Date( /*2019, 7, 21, 8, 59, 0*/);
var today = new Date(
    rightNow.getFullYear(),
    rightNow.getMonth(),
    rightNow.getDate()
);

const tags = [
    'Hi Ryan Kirkey!',
    'Hi Itai!!',
    'Fuck the College Board!',
    'Sag is Broke',
    'Shame on you',
    'The first time in a decade',
    'Epstein didn\'t kill himself',
    'Global Voice > Sag',
    'Shoutout Porco my schlime',
    'Go tell Omer something good',
    '*Surprised Pikachu*',
    'wow. 😮 woOoOoOw. 😵 WOW. 😱 SO you guys are SO INTO 🙌🏻 yourselves 💅🏻, like, you are SO committed 💍💏 to CENSORING 🤐🚫 innocent people 👶🏻 that you’re just gonna go and try to get my patreon DELETED 🔥 now. oh, you have an OPINION 📝😡🙄',
    'orange man bad',
    'red team won 2019',
    'no more 4 at a table',
    'hey mr. jones',
    'don\'t take apush',
    'hi krak man',
    'rip juice he got drank',
    'https://i.imgur.com/PoGoXoa.jpg',
    'www.globalvoice.news',
    'elbow grease is a social construct',
    'mr. fischer is the superior Elon',
    'Join Makers Club and meet Jeff Bezos',
    'Sandeep Bose'
];

//THIS IS IT
// 0 = A, 1 = B, 2 = Special
var aWeek = 0;


if (aWeek == 0) {
    document.getElementsByClassName("bhsJumbo")[0].style.backgroundColor =
        "#5FA8D3";
    console.log("It's  A week!");
} else if (aWeek == 1) {
    document.getElementsByClassName("bhsJumbo")[0].style.backgroundColor =
        "#FF6F59";
    console.log("It's B week!");
} else if (aWeek == 2) {
    document.getElementsByClassName("bhsJumbo")[0].style.backgroundColor =
        "#A0DE7C";
    console.log("It's a special week!!");
}

document.getElementById("tag").innerHTML = randomTag(tags);

function randomTag(tags) {
    console.log("random tag")
    return tags[Math.floor(Math.random() * tags.length)];
}

function getAWeek() {
    return aWeek;
}

function calcTime(dayMap, id) {
    if (rightNow.getDay() != 6 && rightNow.getDay() != 7) {
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
        console.log(timeUntil + " time until");

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

        console.log(finalString + "IS FINALSTRING");

        document.getElementById(id).innerHTML = finalString;
    } else {
        console.log("WEEKEND")
        document.getElementById(id).innerHTML = "Have a good weekend!";
    }

}


// Set the date we're counting down to
var countDownDate = new Date("May 29, 2020 14:45:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("senior").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("senior").innerHTML = "EXPIRED";
    }
}, 1000);