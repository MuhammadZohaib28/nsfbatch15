console.log("Hello, World! This is Day 4 of learning JavaScript.");

// ELIF LADDER


let studentPercentage = 3;

if (studentPercentage > 100) {
    console.log(`ERROR: Percentage cannot exceed 100%, and student got ${studentPercentage}% `)
}


// AND - &&

// ENTER KAY UPER WAALI KEY
// OR - ||



else if (studentPercentage >= 80) {
    console.log(`Student got ${studentPercentage}%, and student got A-0NE Grade`)
}



else if (studentPercentage >= 70) {
    console.log(`Student got ${studentPercentage}%, and student got B Grade`)
}


else if (studentPercentage >= 60) {
    console.log(`Student got ${studentPercentage}%, and student got C Grade`)
}


else if (studentPercentage >= 50) {
    console.log(`Student got ${studentPercentage}%, and student got D Grade`)
}


else if (studentPercentage < 50 && studentPercentage >= 0) {
    console.log(`Student got ${studentPercentage}%, and student got F Grade`)
}



else {
    console.log(`ERROR: Percentage cannot less than 0, and student got ${studentPercentage}% `)
}













let namazTime = "3:51PM";

if (namazTime >= "4:50AM" && namazTime <= "6:00AM") {
    console.log(`The time is ${namazTime}, and this is Fajr Time`)
} else if (namazTime >= "12:50PM" && namazTime <= "5:07PM") {

    console.log(`The time is ${namazTime}, and this is Zohr Time`)

} else if (namazTime >= "5:08PM" && namazTime <= "7:00PM") {

    console.log(`The time is ${namazTime}, and this is Asar Time`)

}


else {
    console.log("This is Makrooh Time")
}