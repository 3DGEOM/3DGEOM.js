// .js that prompts the user

confirm("What time is it in your current location?")

//prompt the user to submit their time in 24 hr format

var CurrentTime = prompt("What is the current time in 24 hr format?")


//if else conditional syntax 

if (CurrentTime < 1200) {
    x = "Good morning"
}

else {
    x = "Good evening"
}

//the greeting can be printed to the console based on the conditional

console.log(x)
