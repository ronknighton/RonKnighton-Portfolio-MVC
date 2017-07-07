//Jacobsthal functions

var callCnt1 = 0;



function jacobsthal1() {
    var y = 40;
    var numIn = isPosInteger($("#jacNumIn").val(), y);
    if (numIn == -1) {
        $("#jacNumIn").val("Invalid Number");
        $("#jacResult1").html("Invalid Input");
    } else {
        resetCount();
        $("#jacResult1").html("CALCULATING...PLEASE WAIT!!")
        $("#jacResult1").html("<b>Iterative Result: </b>" + computeIterative(numIn).toLocaleString());
        $("#effResult1").html("<b>Iterative Efficiency: </b>" + callCnt.toLocaleString());
        $("#jacResult2").html("<b>Recursive Result: </b>" + computeRecursive(numIn).toLocaleString());
        $("#effResult2").html("<b>Recursive Efficiency: </b>" + callCnt.toLocaleString());
    }

}

function computeRecursive1(number) {
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

function computeIterative1(number) {

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
function resetCount1() {

    callCnt = 0;

}

function isPosInteger1(x, y) {
    var num = Number(x);

    var posInt = Math.round(num) === num && num > 0 && num <= y ? num : -1;

    return posInt;

}

function cleardata1() {

    clearFac();
    clearFB();
    clearPal();
    clearSM();
    clearJac();
}

function clearJac1() {
    $("#jacForm")[0].reset();
    $("#jacResult1").html("");
    $("#effResult1").html("");
    $("#jacResult2").html("");
    $("#effResult2").html("");
}
