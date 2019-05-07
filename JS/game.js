var secretNumber = 4;

var guess = Number(prompt("Guess a number "));

/*
if(guess == secretNumber){
    alert("Correct, are you a wizard?");
    console.log("Are you a wizard?");
}

else{
    alert("Wrong");
    console.log("wrong");
}

*/

while(guess !== secretNumber){
    alert("Wrong");
    var guess = Number(prompt("Guess a number "));
}

if(guess == secretNumber){
    alert("Correct, are you a wizard?");
    console.log("Are you a wizard?");
}

