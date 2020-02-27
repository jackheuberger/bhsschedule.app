/*This file is just to break up the schedules into multiple files, and to be more efficient and use a function to
calculate the times of each separate schedule.*/
var dayArray = [];
console.log("today is " + rightNow.getDay())
if (getAWeek() == 0) {
    // A WEEK
    if (rightNow.getDay() == 1) {
        //MONDAY A
        dayArray = [
            ["A Block starts", 30000000],
            ["A Block ends", 33600000],
            ["B Block starts", 33900000],
            ["B Block ends", 37500000],
            ["T Block starts", 37800000],
            ["T Block ends/Lunch A starts", 39600000],
            ["[Lunch A has started] D Block starts", 39900000],
            ["D ends @ 12:05, Lunch A ends in", 41400000],
            ["D ends @ 12:05, Lunch B starts in", 43500000],
            ["D Block ends", 45300000],
            ["E Block starts", 45600000],
            ["E Block ends", 49200000],
            ["G Block starts", 49500000],
            ["G Block ends", 53400000]
        ];
    } else if (rightNow.getDay() == 2) {
        //TUESDAY A
        dayArray = [
            ["C Block starts", 30000000],
            ["C Block ends", 33900000],
            ["E Block starts", 34200000],
            ["E Block ends", 38100000],
            ["D Block/Lunch A starts", 38400000],
            ["D ends @ 12:15, Lunch A ends", 39900000],
            ["D ends @ 12:15, Lunch B starts", 42300000],
            ["D Block ends", 44100000],
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
            ["C Block ends/Lunch A starts", 40500000],
            ["[Lunch A has started] E Block starts", 40800000],
            ["E ends @ 12:45, Lunch A ends", 42300000],
            ["E ends @ 12:45, Lunch B starts", 44100000],
            ["E Block ends", 45900000],
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
            ["X Block ends/Lunch B starts", 42900000],
            ["G Block starts", 43200000],
            ["G ends @ 1:35, Lunch B ends", 44700000],
            ["G ends @ 1:35, Lunch A starts", 45000000],
            ["G ends @ 1:35, Lunch A ends", 46800000],
            ["G Block ends", 48900000],
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
            ["D Block/Lunch B starts", 42900000],
            ["D ends @ 1:35, Lunch B ends", 44700000],
            ["D ends @ 1:35, Lunch A starts", 45000000],
            ["D ends @ 1:35, Lunch A ends", 46800000],
            ["D Block ends", 48900000],
            ["F Block starts", 48900000],
            ["F Block ends", 53100000]
        ];
    }
} //B WEEK
else if (getAWeek() == 1) {
    if (rightNow.getDay() == 1) {
        dayArray = [
            ["A Block starts", 30000000],
            ["A Block ends", 33900000],
            ["T Block starts", 34200000],
            ["T Block ends", 36000000],
            ["C Block starts", 36300000],
            ["C Block ends", 39900000],
            ["E Block/Lunch A starts", 40200000],
            ["E ends @ 12:45, Lunch A ends", 41700000],
            ["E ends @ 12:45, Lunch B starts", 44100000],
            ["E Block ends", 45900000],
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
            ["C Block/Lunch A starts", 38400000],
            ["C ends @ 12:15, Lunch A ends", 39900000],
            ["C ends @ 12:15, Lunch B starts", 42300000],
            ["C Block ends", 44100000],
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
            ["X Block ends/Lunch A starts", 39600000],
            ["[Lunch A has started] E Block starts", 39900000],
            ["E ends @ 12:35, Lunch A ends", 41400000],
            ["E ends @ 12:35, Lunch B starts", 43500000],
            ["E Block ends", 45300000],
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
            ["F Block/Lunch B starts", 43200000],
            ["F ends @ 1:40, Lunch B ends", 45000000],
            ["F ends @ 1:40, Lunch A starts", 45000000],
            ["F ends @ 1:40, Lunch A ends", 46800000],
            ["F Block ends", 49200000],
            ["G Block starts", 46200000],
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
            ["D Block/Lunch B starts", 43200000],
            ["D ends @ 1:40, Lunch B ends", 45000000],
            ["D ends @ 1:40, Lunch A starts", 45000000],
            ["D ends @ 1:40, Lunch A ends", 48900000],
            ["E Block starts", 49200000],
            ["E Block ends", 52800000]
        ];
    }

    //SPECIAL SCHEDULE
} else if (getAWeek() == 2) {
    if (rightNow.getDay() == 1) {
        dayArray = [
            
        ];
    }
    if (rightNow.getDay() == 2) {
        dayArray = [
            
        ];
    }
    if (rightNow.getDay() == 3) {
        dayArray = [
            
        ];
    }
}
dayMap = new Map(dayArray);
console.log("BHS main calc. The BHS schedule is " + dayArray);
calcTime(dayMap, "bhsTime");
