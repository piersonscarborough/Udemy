// fucntion that checks if a number is even

function isEven(num){
    if(num % 2 === 0){
        console.log('true');
        return true;
    }
}

isEven(2);

// function that returns factorial of a number

function factorial(num){

    var result = 1;

    for(var i = 1; i <= num; i ++){
        result = result * i;
        
    }
    return result;
}   

factorial(3)

// function to rplace '-' with '_'

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

kebabToSnake('sup-bro');
console.log(kebabToSnake('sup-bro'))