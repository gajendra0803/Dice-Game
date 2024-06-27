//for dice 1
var randomNumber1=Math.floor(Math.random()*6)+1;  //1-6
var randomDiceImage= "dice" + randomNumber1 +".png";
var randomImageSource ="images/" +randomDiceImage;
var Image1 =document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource);

//for dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice" +randomNumber2 +".png";
var randomImageSource1="images/" +randomDiceImage1;
var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImageSource1);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won.";
}
else if (randomNumber2>randomNumber2){
    document.querySelector("h1").innerHTML="player 2 won.";
}

else{
    document.querySelector("h1").innerHTML="Match Draw.";
}