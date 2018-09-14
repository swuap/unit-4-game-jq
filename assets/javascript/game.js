
var wins = 0
var losses = 0

// this loads random numbers in to the variables used for the game
function startUp () {
    gameScore = 0;
    target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    bruce = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    tyler = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    hasan = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    netreia = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#target").text("You must guess: " + target);
    $("#gameScore").text("So far you have: " + gameScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    // document.getElementById("target").innerHTML = "You must guess: " + target;
    // document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;
    // document.getElementById("wins").text = wins;
    // document.getElementById("losses").text = + losses;

    // testing that the variables are loading numbers correctly (and also allows you to cheat :) )
    console.log(target);
    console.log("Bruce variable is " + bruce);
    console.log("Tyler variable is " + tyler);
    console.log("Hasan variable is " + hasan);
    console.log("Netreia variable is " + netreia);
};

// this will reset the game once player wins or loses, and keeps score
function win(){
    wins++;
    $("#wins").text("Wins: " + wins);
    // document.getElementById("wins").innerHTML = "Wins: " + wins;
    startUp();
};

function lose(){
    losses++;
    $("#losses").text("Losses: " + losses);
    // document.getElementById("losses").innerHTML = "Losses: " + losses;
    startUp();
};

// this adds points to the users total score based on the value of each picture
$("#bruce").on("click", function(){
    gameScore = gameScore + bruce;
    $("#gameScore").html("So far you have: " + gameScore)
    
    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

$("#tyler").on("click", function(){
    gameScore = gameScore + tyler;
    $("#gameScore").html("So far you have: " + gameScore)
    
    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

$("#hasan").on("click", function(){
    gameScore = gameScore + hasan;
    $("#gameScore").html("So far you have: " + gameScore)
    
    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

$("#netreia").on("click", function(){
    gameScore = gameScore + netreia;
    $("#gameScore").html("So far you have: " + gameScore)
    
    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

// document.getElementById("bruce").addEventListener("click", function() {
//     gameScore = gameScore + bruce;
//     document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

//     if (gameScore === target) {
//         win ();
//     };

//     if (gameScore > target) {
//         lose ();
//     };
// });

// document.getElementById("tyler").addEventListener("click", function() {
//     gameScore = gameScore + tyler;
//     document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

//     if (gameScore === target) {
//         win ();
//     };

//     if (gameScore > target) {
//         lose ();
//     };
// });

// document.getElementById("hasan").addEventListener("click", function() {
//     gameScore = gameScore + hasan;
//     document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

//     if (gameScore === target) {
//         win ();
//     };

//     if (gameScore > target) {
//         lose ();
//     };
// });

// document.getElementById("netreia").addEventListener("click", function() {
//     gameScore = gameScore + netreia;
//     document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

//     if (gameScore === target) {
//         win ();
//     };

//     if (gameScore > target) {
//         lose ();
//     };
// });

