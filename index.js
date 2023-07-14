var numberOfButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var pressedKey = this.innerHTML;
        keypressed(pressedKey);
        buttonAnimation(pressedKey);

    })
}

document.addEventListener("keydown", function(event) {

    keypressed(event.key);
    buttonAnimation(event.key);

});

function keypressed(key) {

    switch(key) {
        case "w" :
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a" : 
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s" : 
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d" : 
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j" : 
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k" : 
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "l" : 
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

        default: alert("The key you pressed is not registered.")
    }
}

function buttonAnimation(currentKey) {

    var buttonPressed = document.querySelector("." + currentKey);

    buttonPressed.classList.add("pressed");

    setTimeout(function() {
        buttonPressed.classList.remove("pressed");  
    }, 100);
}