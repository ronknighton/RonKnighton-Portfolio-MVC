//***Fizz-Buzz Calculator***

function modulus1() {
    var array1 = [];
    var y = 100;
    var num1 = isPosInteger($("#FBFirstNum").val(), y);
    var num2 = isPosInteger($("#FBSecondNum").val(), y);

    if (num1 == -1) {
        $("#FBFirstNum").val("INVALID NUMBER");
        array1 = invalidInput;
    }
    else if (num2 == -1) {
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

function isPosInteger1(x, y) {
    var num = Number(x);
    var posInt = Math.round(num) === num && num > 0 && num <= y ? num : -1;
    return posInt;
}

function clearFB1() {
    $("#FBForm")[0].reset();
    $("#FBResult1").html("");
}

function cleardata1() {
    clearFac();
    clearFB();
    clearPal();
    clearSM();
}