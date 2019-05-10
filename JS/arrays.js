
// Reverse an array
function printReverse(arr){
    for(var i = arr.length -1; i >= 0; i --){
        console.log(arr[i]);
    }
}
printReverse([1,2,3,4]);


//Is an array uniform?
function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length-1; i ++){
        if(arr[i] !== first){
            return false;
        }
    } 
    return true;
}

isUniform([1,1,1]);


//Sum of the array
function sumArray(arr){
    total = 0;
    arr.forEach(function(num){
        total = total + num
    });
    console.log(total);
}

sumArray([1,2,3]);

function sumArray(arr){
    total = 0;
    for(var i = 0; i < arr.length; i ++){
        total += arr[i]
    }
    console.log(total);
}

sumArray([1,10,3]);


//Largest number in an array
function max(arr){
    highest = 0
    arr.forEach(function(num){
        if (num > highest){
            highest = num
        } 
    });
    console.log(highest);
}

max([0,3,5,4,5])

function max(arr){
    highest = 0
    for(var i = 0; i < arr.length -1; i ++){
        if(arr[i] > highest){
            highest = arr[i]
        }
    }
    console.log(highest);
}

max([0,3,5,4,5])