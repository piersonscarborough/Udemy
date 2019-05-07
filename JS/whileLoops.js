// #1 Print every number between -10 and 19

var num = -10;

while(num < 20){
    console.log(num);
    num ++;
}

// #2 Print every even number between 10 and 40

var num = 10;

while(num >= 10 && num <= 40){
    console.log(num);
    num +=2;
}

var num = 10;

while(num >= 10 && num <= 40){
    if(num % 2 === 0){
        console.log(num);
    }
    num +=1;
}

// #3 Print every odd number between 301 and 333

var num = 301;

while(num >= 301 && num <= 333){
    console.log(num);
    num ++;
}

var num = 300;

while(num <= 333){
    if(num % 2 !== 0) {
        console.log(num);
    }
    num +=1; 
}

// #4 Print every number between 5 and 50 that is divisble by both 5 and 3

var num = 5

while(num >= 5 && num <= 50){
    if(num % 5 == 0 && num % 3 == 0){
        console.log(num)
    }
    num ++;
}
