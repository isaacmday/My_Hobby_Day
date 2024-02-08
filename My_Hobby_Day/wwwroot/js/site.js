// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*$("#btnSubmit").click( function () {
    var chargeAmount = $("#numHours").val() * 20;
    $("#output").innerText = "Your quote is $" + chargeAmount + ".";
})*/

$("#btnSubmit").on("click", function () {
    var chargeAmount = $("#numHours").val() * 20;
    $("#output").text("Your quote is $" + chargeAmount + ".");
})
