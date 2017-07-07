//****Simple Number Calculations****

var invalidInput = "<span class='custom-bold-red'> Please correct input and try again. </span>";

function validate() {
    var numArray = makeArray3();
    var checkNum = Math.min.apply(null, numArray);

    if (checkNum == -1) {

        
        $("#numResult").html(invalidInput);
        $("#minResult").html("");
        $("#maxResult").html("");
        $("#result").html("");
        $("#sumResult").html("");
        $("#meanResult").html("");
        
    } else {
        
        showArray(numArray);
        minNum(numArray);
        maxNum(numArray);
        multiplyBy(numArray);
        sumArray(numArray);
        meanArray(numArray);

    }

}

function meanArray(x) {
    var sum = 0;
    var count = 0;
    for (i = 0; i < x.length; i++) {
        sum += (x[i]);
        count++;
    }
    $("#meanResult").html("<b> Mean Total: </b>" + (sum / count));
}


function sumArray(x) {
    var numArray = x;
    var sum = 0;
    for (i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i]);
    }
    $("#sumResult").html("<b> Sum Total: </b>" + sum.toLocaleString());

}

function minNum(x) {

    var minNum = Math.min.apply(null, x);

    $("#minResult").html("<b> Minimum Value: </b>" + minNum);

}
function maxNum(x) {

    var maxNum = Math.max.apply(null, x);
    $("#maxResult").html("<b> Max Value: </b>" + maxNum);

}


function makeArray4() {
    var y = 1000000;
    var numArray = [];
    var $list = $("#simplemath input[type='text']");
    $list.each(function (i, v) {
        numArray[i] = isPosInteger($(v).val(), y) == -1 ? "INVALID NUMBER" : isPosInteger($(v).val(), y);
    });
    return numArray;
}

//Making array using .each and function (i, v)
function makeArray3() {
    var y = 1000000;
    var numArray = [];
    var $list = $("#simplemath input[type='text']");
    $list.each(function (i, v) {
        numArray[i] = isPosInteger($(v).val(), y);
        if (numArray[i] == -1) {
            $(v).val("INVALID NUMBER");
        }
    });
    return numArray;
}

//Make array using .each and .push
function makeArray2() {
    var y = 1000000;
    var numArray = [];
    var i = 0;
    $("#simplemath input[type='number']").each(function () {
        numArray.push(isPosInteger($(this).val(), y));

    });
    return numArray;
}


//Make array tageting each ID and setting to separate variables
function makeArray() {
    var y = 1000000;
    var num1 = isPosInteger($("#firstNumber").val(), y);
    var num2 = isPosInteger($("#secondNumber").val(), y);
    var num3 = isPosInteger($("#thirdNumber").val(), y);
    var num4 = isPosInteger($("#fourthNumber").val(), y);
    var num5 = isPosInteger($("#fifthNumber").val(), y);


    var numArray = [num1, num2, num3, num4, num5];
    return numArray;

}

function showArray(x) {

    $("#numResult").html("<b> Validated Numbers: </b>" + x.toString());

}

function multiplyBy(x) {

    var numArray = x;
    var sum = 1;
    for (i = 0; i < numArray.length; i++) {
        sum *= Number(numArray[i]);

    }
    $("#result").html("<b> Multiplied Total: </b>" + sum.toLocaleString());

}

function isPosInteger(x, y) {
    var num = Number(x);

    var posInt = Math.round(num) === num && num > 0 && num <= y ? num : -1;

    return posInt;

}

//***Factorial Calculator
function calcFactorial() {
    var y = 150;
    var num = isPosInteger($("#factNumber").val(), y);
    if (num == -1) {
        $("#factNumber").val("INVALID NUMBER");
        $("#factResult").html(invalidInput);
    } else {
        var rval = 1;
        for (var i = 2; i <= num; i++) {
            rval = rval * i;
        }

        $("#factResult").html("<b>Factorial Value: </b>" + rval.toExponential(5));
    }
}

//***Fizz-Buzz Calculator***
function modulus() {
    var array1 = [];
    var y = 100;
    var num1 = isPosInteger($("#FBFirstNum").val(), y);
    var num2 = isPosInteger($("#FBSecondNum").val(), y);

    if (num1 == -1) {
        $("#FBFirstNum").val("INVALID NUMBER");
        array1 = invalidInput;
    }
    if (num2 == -1) {
        $("#FBSecondNum").val("INVALID NUMBER");
        array1 = invalidInput;
    }
    else {
        for (var i = 0; i < 100; i++) {
            if ((i + 1) % num1 == 0 && (i + 1) % num2 == 0) {
                array1[i] = "<span class='custom-bold-red'> Fizz-Buzz</span>";

            }
            else if ((i + 1) % num1 == 0) {
                array1[i] = "<span class='custom-bold-red'>  Fizz</span>";
            }
            else if ((i + 1) % num2 == 0) {
                array1[i] = "<span class='custom-bold-red'>  Buzz</span>";
            }
            else {
                array1[i] = i + 1;
            }

        }
    }
    $("#FBResult1").html(array1.toString());
   
}


//***Palindrome (Reverse String)***

function palindrome() {
    var pStr = $("#palWord").val();
    var filteredStr = removeSpecial(pStr);

    $("#palResult1").html("<span class='custom-bold-red'>" + "( " + filteredStr + " )" + "</span> reversed is <span class='custom-bold-red'>" + "( " + reverseString(filteredStr) + " )" + "</span>.");
    $("#palResult2").html(testString(filteredStr));
    
}

function removeSpecial(str) {
    var outString = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');    
    return str.trim(outString);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function testString(str) {
    var str = str.toLowerCase();
    if (str == ""){
        return "The word or phrase is <span class='custom-bold-red'>BLANK</span>.";
    }
    else if (str === reverseString(str)) {
        return "The word or phrase <span class='custom-bold-red'>is</span> a palindrome.";
    }
    else {
        return "The word or phrase <span class='custom-bold-red'>is not</span> a palindrome.";
    }

}




//Jacobsthal functions

var callCnt = 0;



function jacobsthal() {
    var y = 40;
    var numIn = isPosInteger($("#jacNumIn").val(), y);
    if (numIn == -1) {
        $("#jacNumIn").val("Invalid Number");
        $("#jacResult1").html(invalidInput);
        $("#effResult1").html("");
        $("#jacResult2").html("");
        $("#effResult2").html("");
    } else {
        resetCount();
        $("#jacResult1").html("<b>CALCULATING...PLEASE WAIT!!</b>")
        $("#jacResult1").html("<b>Iterative Result: </b>" + computeIterative(numIn).toLocaleString());
        $("#effResult1").html("<b>Iterative Efficiency: </b>" + callCnt.toLocaleString());
        $("#jacResult2").html("<b>Recursive Result: </b>" + computeRecursive(numIn).toLocaleString());
        $("#effResult2").html("<b>Recursive Efficiency: </b>" + callCnt.toLocaleString());
    }

}

function computeRecursive(number) {
    callCnt++;

    if ((number == 0) || (number == 1)) // base cases
    {
        return number;
    } else // recursion step
    {
        //callCnt++;
        return computeRecursive(number - 1) + (2 * (computeRecursive(number - 2)));
    }
}

function computeIterative(number) {

    var num1 = 0;
    var num2 = 1;
    var MULT = 2;
    var result = 0;

    //int secondResult = 0;
    if (number == 0 || number == 1) {
        callCnt++;
        return number;

    } else {
        for (var i = 1; i < number; i++) {
            result = num2 + (MULT * num1);
            callCnt++;
            num1 = num2;
            num2 = result;

        }

        return result;
    }
}

//Method to reset method call count (efficiency)
function resetCount() {

    callCnt = 0;

}


// ***Clear input and outputs***
function clearSM() {
    $("#SMForm")[0].reset();
    $("#numResult").html("");
    $("#minResult").html("");
    $("#maxResult").html("");
    $("#result").html("");
    $("#sumResult").html("");
    $("#meanResult").html("");
    
}


function clearFB() {
    $("#FBForm")[0].reset();
    $("#FBResult1").html("");
}

function clearPal() {
    $("#palForm")[0].reset();
    $("#palResult1").html("");
    $("#palResult2").html("");
    $("#palResult3").html("");
}

function clearFac() {
    $("#facForm")[0].reset();
    $("#factResult").html("");
}

function cleardata() {

    clearFac();
    clearFB();
    clearPal();
    clearSM();
    clearJac();
}

function clearJac() {
    $("#jacForm")[0].reset();
    $("#jacResult1").html("");
    $("#effResult1").html("");
    $("#jacResult2").html("");
    $("#effResult2").html("");
}



