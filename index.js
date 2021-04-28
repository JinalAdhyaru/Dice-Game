var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imgName1 = "images/dice" + randomNumber1 +".png";
document.getElementsByTagName("img")[0].setAttribute("src",imgName1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imgName2 = "images/dice" + randomNumber2 +".png";
document.getElementsByTagName("img")[1].setAttribute("src",imgName2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}