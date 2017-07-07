//****Simple Number Calculations****

var invalidInput1 = "<span class='custom-bold-red'> INVALID INPUT </span>";

function validate1() {
    var numArray = makeArray4();
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

function meanArray1(x) {
    var sum = 0;
    var count = 0;
    for (i = 0; i < x.length; i++) {
        sum += (x[i]);
        count++;
    }
    $("#meanResult").html("<b> Mean Total: </b>" + (sum / count));
}


function sumArray1(x) {
    var numArray = x;
    var sum = 0;
    for (i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i]);
    }
    $("#sumResult").html("<b> Sum Total: </b>" + sum.toLocaleString());

}

function minNum1(x) {

    var minNum = Math.min.apply(null, x);
    $("#minResult").html("<b> Minimum Value: </b>" + minNum);

}

function maxNum1(x) {

    var maxNum = Math.max.apply(null, x);
    $("#maxResult").html("<b> Max Value: </b>" + maxNum);

}

//Making array using .each and function (i, v)
function makeArray4() {
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

function isPosInteger1(x, y) {
    var num = Number(x);
    var posInt = Math.round(num) === num && num > 0 && num <= y ? num : -1;
    return posInt;
}

function clearSM1() {
    $("#SMForm")[0].reset();
    $("#numResult").html("");
    $("#minResult").html("");
    $("#maxResult").html("");
    $("#result").html("");
    $("#sumResult").html("");
    $("#meanResult").html("");
    $("#errorMessage1").html("");
}

function cleardata1() {
    clearFac();
    clearFB();
    clearPal();
    clearSM();
}