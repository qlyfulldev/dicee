var randomDiceNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource1 = "dice" + randomDiceNum1 + ".png";
var randomDiceImage1 = "./images/" + randomDiceSource1;
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomDiceNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource2 = "dice" + randomDiceNum2 + ".png";
var randomDiceImage2 = "./images/" + randomDiceSource2;
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomDiceNum1>randomDiceNum2){
    document.querySelector("h1").innerHTML="Player 1 wins";
} else if (randomDiceNum1<randomDiceNum2){
    document.querySelector("h1").innerHTML="Player 2 wins";
} else {
    document.querySelector("h1").innerHTML="Draw!"
}