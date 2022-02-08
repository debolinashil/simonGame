var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userCLickedButtons = [];
var randomColor;
var userChosenColor;
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started){
        
        nextSequence();
        started = true;
    }
    
});


$(".btn").click(function(){
    userChosenColor = $(this).attr("id");
    userCLickedButtons.push(userChosenColor);
    playSound(userChosenColor);
    animateButton(userChosenColor);
    checkAnswer(userCLickedButtons.length-1);
});


function checkAnswer(num){

    if(userCLickedButtons[num] == gamePattern[num]){
        if(userCLickedButtons.length == gamePattern.length){

            
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{

        playSound("wrong");
        $("h1").text("Game Over! Press A Key To Restart!");
        started = false;
        level = 0;
        gamePattern = [];
    }

}


function nextSequence(){

    userCLickedButtons = [];

    level++;

    $("h1").text("Level " + level);
    
    var randomNum = Math.floor(Math.random() * 4);
    
    randomColor = buttonColors[randomNum];
    
    gamePattern.push(randomColor);
    
    playSound(randomColor);

    animateButton(randomColor);

}

function playSound(name){
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animateButton(name){

    var colorID = "#" + name;
    $(colorID).fadeOut('fast').fadeIn('fast');

}











