//First İmage
let randomNumber1 = Math.floor((Math.random()*6)+1);
let diceImage = "images/dice"+randomNumber1+".png"
let imgSrc = document.querySelectorAll("img")[0];
imgSrc.setAttribute("src",diceImage);

//Second İmage
let randomNumber2 = Math.floor((Math.random()*6)+1);
let diceImage2 = "images/dice"+randomNumber2+".png"
let imgSrc1 = document.querySelectorAll("img")[1];
imgSrc1.setAttribute("src",diceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Player1 Won!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="Player2 Won!!";
}
else{
    document.querySelector("h2").innerHTML="Draw!!";
}