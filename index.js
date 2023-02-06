// receive a positive number as a input parameter 
// check the input value, is a number or not. if not then ask for valid input. 
// do some math operation and return result.

function mindGame(value) {
    if (typeof value != 'number') {
        return "provide number!!";
    }
    else {
        if (value < 0) {
            return "provide positive number!!";
        }
        else {
            let result = (((value * 3) + 10) / 2) - 5;
            return result;
        }
    }

}

// let abc = 33;
// console.log(mindGame(abc));

// receive a string as a input parameter 
// check the input value, is a string or not. if not then ask for valid input. 
// check the length of the string. if the length is even number then return "even" or return "odd".

function evenOdd(value) {
    if (typeof value != 'string') {
        return "provide string value!!";
    }
    else {
        let totalCharOfString = value.length;
        if (totalCharOfString % 2 == 0) {
            return 'even';
        }
        else {
            return "odd";
        }
    }
}


// let abc = 7;
// console.log(evenOdd(abc));

// receive a number as a input parameter 
// check the input value, is a number or not. if not then ask for valid input. 
// do some math operation and return result.

function isLGSeven(value) {
    if (typeof value != 'number') {
        return "provide number!!"
    }
    else {
        if (value - 7 < 7) {
            return value - 7;
        }
        else {
            return value * 2;
        }

    }
}


// let abc = 15;
// console.log(isLGSeven(abc));

// receive an array as a input parameter 
// check the input value, is an array or not. if not then ask for valid input. 
// count negative values of the array and return result.

function findingBadData(value) {
    if (Array.isArray(value) != true) {
        return "provide an array!!"
    }
    else {
        let array = value;
        let badDataCounter = 0;
        for (i = 0; i < array.length; i++) {

            if (array[i] < 0) {
                badDataCounter++;
            }
        }
        return badDataCounter;
    }
}


// let abc = [-4, -9, -5, -33, -55];
// let abc = 20;
// console.log(findingBadData(abc));


// receive 3 numbers as input parameter 
// check the input values, are they number or not. if not then ask for valid input. 
// do some math operation and return result.

function gemsToDiamond(value1, value2, value3) {
    if (typeof value1 != 'number' || typeof value2 != 'number' || typeof value3 != 'number') {
        return "provide valid input (numbers)!!"
    }
    else {
        let GemsToDiamondFrnd1 = value1 * 21;
        let GemsToDiamondFrnd2 = value2 * 32;
        let GemsToDiamondFrnd3 = value3 * 43;
        let totalDiamond = (GemsToDiamondFrnd1 + GemsToDiamondFrnd2 + GemsToDiamondFrnd3);
        if (totalDiamond >= 2000) {
            return totalDiamond - 2000;
        }
        else {
            return totalDiamond;
        }
    }
}

let abc = 100;
let abc2 = 5;
let abc3 = 1;
console.log(gemsToDiamond(abc, abc2, abc3));