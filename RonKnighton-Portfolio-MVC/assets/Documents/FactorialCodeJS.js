//***Factorial Calculator

var invalidInput1 = "<span class='custom-bold-red'> INVALID INPUT </span>";

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


function isPosInteger1(x, y) {
    var num = Number(x);
    var posInt = Math.round(num) === num && num > 0 && num <= y ? num : -1;
    return posInt;
}

function clearFac1() {
    $("#facForm")[0].reset();
    $("#factResult").html("");
}

function cleardata1() {

    clearFac();
    clearFB();
    clearPal();
    clearSM();
}
