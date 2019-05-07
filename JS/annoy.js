var answer = prompt("are we there yet?");

answer = answer.toLowerCase();

/*
if(answer === 'yes') {
    alert("Yay, we made it!");
}

else{
    alert("no");
}

*/
/*
while(answer !== 'yes' || answer !== 'yeah') {
    alert("no");
    var answer = prompt("are we there yet?");
}


if(answer === 'yes' || answer === 'yeah') {
    alert("Yay, we made it!");
}
*/

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    alert("no");
    var answer = prompt("are we there yet?");
}

alert("Yay, we made it!");
