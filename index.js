

function runProgram() {
    function img1(num1) {
        var randomDiceImg = "dice" + num1 + ".png";
        var imgSource = "assests/" + randomDiceImg;
    
        document.querySelector(".left_img").setAttribute("src", imgSource);
    }
    
    function img2(num2) {
        var randomDiceImg = "dice" + num2 + ".png";
        var imgSource = "assests/" + randomDiceImg;
    
        document.querySelector(".right_img").setAttribute("src", imgSource);
    }
    
    var randomNumber1 = Math.floor(Math.random()*6 + 1);
    var randomNumber2 = Math.floor(Math.random()*6 + 1);
    
    img1(randomNumber1);
    img2(randomNumber2);
    
    if(randomNumber1 == randomNumber2) {
        document.querySelector(".heading_name").innerHTML = "Draw!";
    }
    else if(randomNumber1 > randomNumber2) {
        document.querySelector(".heading_name").innerHTML = "Player 1 Wins!";
    }
    else {
        document.querySelector(".heading_name").innerHTML = "Player 2 Wins!";
    }
}

document.querySelector("button").addEventListener("click", runProgram);