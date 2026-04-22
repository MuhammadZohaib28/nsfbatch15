console.log("IF ELSE CONDITION IN JS")


if (false) {
    console.log("YEH CONDITION TRUE HAI")
} else {
    console.log("YEH CONDITION FALSE HAI")
}



let citizenAge = 14;

let minimumAge = 18;


console.log(citizenAge > minimumAge, "TESTING IF ELSE LOGIC")


let cnicLogic = citizenAge > minimumAge;






if (citizenAge > minimumAge) {

    console.log(`Citizen age is ${citizenAge}. Citizen is eligible for CNIC card.`)

} else {
    console.log(`Citizen age is ${citizenAge}. Citizen is not eligible for CNIC card.`)
}



// = - ASSIGN
// == - COMPARISION OPERATION
// === - COMPARISION OPERATION




let userTypedPassword = 12345;

let originalPassword = "12345";

let finalAnswer = userTypedPassword === originalPassword;


console.log(finalAnswer, "PASSWORD CHECKER")



if (finalAnswer) {
    console.log(`Welcome Back`)
} else {
    console.log("Wrong Credentials")
}