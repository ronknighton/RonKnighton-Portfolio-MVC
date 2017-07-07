$(document).ready(function () {
    $.get('assets/Documents/PalindromeJS.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#PalCode").html(html1);
        SyntaxHighlighter.highlight();        
    }, 'script');

    $.get('assets/Documents/SimpleMathJS.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#SMCode").html(html1);
        SyntaxHighlighter.highlight();        
    }, 'script');

    $.get('assets/Documents/ModulusCodeJS.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#FBCode").html(html1);
        SyntaxHighlighter.highlight();        
    }, 'script');

    $.get('assets/Documents/FactorialCodeJS.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#FactCode").html(html1);
        SyntaxHighlighter.highlight();        
    }, 'script');

    $.get('assets/Documents/JacobsthalJS.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#JacCode").html(html1);
        SyntaxHighlighter.highlight();
    }, 'script');

    $("#resume, #FactCode, #FBCode, #SMCode, #PalCode, #JacCode").hide();
});


$("#ButSMCode").click(function () {
    $("#SMCode").toggle();
});

$("#ButFBCode").click(function () {
    $("#FBCode").toggle();
});

$("#ButPalCode").click(function () {
    $("#PalCode").toggle();
});

$("#ButFactCode").click(function () {
    $("#FactCode").toggle();
});


$("#ButResume").click(function () {
    $("#resume").toggle();
});

$("#ButJacCode").click(function () {
    $("#JacCode").toggle();
});

//$("#ButResume").toggle(function () {
//    $("#resume").show();
//}, function () {
//    $("#resume").hide();
//});

$("form").submit(function () {
    return false;
})