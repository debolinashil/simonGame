
var randomNum;
var n = 1;
var level;
var ranNum = [];
var clickNum =[];

$(document).keypress(function(){
    console.log("start");
    playSimon(1);
});

function whichButton(buttonNum){
    if(buttonNum == 0){
        $("#green-button").fadeOut('fast').fadeIn('fast');
        var greenAudio = new Audio("sounds/green.mp3");
        greenAudio.play();
    }
    else if(buttonNum == 1){
        $("#red-button").fadeOut('fast').fadeIn('fast');
        var redAudio = new Audio("sounds/red.mp3");
        redAudio.play();
    }
    else if(buttonNum == 2){
        $("#yellow-button").fadeOut('fast').fadeIn('fast');
        var yellowAudio = new Audio("sounds/yellow.mp3");
        yellowAudio.play();
    }
    else {
        $("#blue-button").fadeOut('fast').fadeIn('fast');
        var blueAudio = new Audio("sounds/blue.mp3");
        blueAudio.play();
    }
}


function playSimon(n){
    console.log("started");
    level = "Level " + n;
    console.log(level);
    $("h1").text("Level");
    randomNum = Math.floor(Math.random()*4); // generates random number from 0-3 [0:green, 1:red, 2:yellow, 3:blue]
    ranNum.push(randomNum); // pushing the random number to an array.

    switch(randomNum){
        case 0:
            $("#green-button").fadeOut('fast').fadeIn('fast');
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
        break;
    
        case 1:
            $("#red-button").fadeOut('fast').fadeIn('fast');
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
        break;
    
        case 2:
            $("#yellow-button").fadeOut('fast').fadeIn('fast');
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
        break;
    
        case 3:
            $("#blue-button").fadeOut('fast').fadeIn('fast');
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
        break;
    
        default:
            $("h1").text("OOPS!! Something is Wrong.");
    }
    var i = 0;
    while(i<ranNum.length){

        // clickNum = checkButtonClick(clickNum);

        $("button").click(function(){
            if($(this).attr('id') == "green-button"){
                whichButton(0);
                clickNum.push(0);
            }
            else if($(this).attr('id') == "red-button"){
                whichButton(1);
                clickNum.push(1);
            }
            else if($(this).attr('id') == "yellow-button"){
                whichButton(2);
                clickNum.push(2);
            }
            else{
                whichButton(3);
                clickNum.push(3);
            }

            if(clickNum[i]==ranNum[i]){
                i += 1;
            }
            else{
                var wrongAudio = new Audio("sounds/wrong.mp3");
                wrongAudio.play();
                $("h1").text("Game Over!! Press A Key To Restart.");
                ranNum=[];
                clickNum=[];
                playSimon(1);
            }
        });
    }
    n += 1;
    playSimon(n);

}
    