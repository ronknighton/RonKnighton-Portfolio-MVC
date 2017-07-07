//***Palindrome (Reverse String)***

function palindrome1() {
    var pStr = $("#palWord").val();
    var filteredStr = removeSpecial1(pStr);
    $("#palResult1").html('<b>' + filteredStr + '</b> reversed is <b>' + reverseString1(filteredStr) + '</b>.');
    $("#palResult2").html(testString(filteredStr));
}

function removeSpecial1(str) {
    var outString = str.replace(/[`~!@#$%^&*()_|+\-=?;:',.<>\{\}\[\]\\\/]/gi, '');
    return str.trim(outString);
}

function reverseString1(str) {
    return str.split("").reverse().join("");
}

function testString1(str) {
    var str = str.toLowerCase();
    if (str == "") {
        return "The word or phrase is <span class='custom-bold-red'>BLANK</span>.";
    }
    else if (str === reverseString(str)) {
        return "The word or phrase <span class='custom-bold-red'>is</span> a palindrome.";
    }
    else {
        return "The word or phrase <span class='custom-bold-red'>is not</span> a palindrome.";
    }

}
function clearPal1() {
    $("#palForm")[0].reset();
    $("#palResult1").html("");
    $("#palResult2").html("");
    $("#palResult3").html("");
}