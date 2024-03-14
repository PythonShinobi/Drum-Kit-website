// Select all elements with the class "drum" and get their length
var allButtons = document.querySelectorAll(".drum").length;

// Loop through all the buttons with the class "drum"
for (var i=0; i < allButtons; i++) {
    // Get each button element
    var button = document.querySelectorAll(".drum")[i]
    // Add a click event listener to each button
    button.addEventListener("click", function () {
        // Get the inner HTML of the clicked button
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard press.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Play different drum sounds based on the key passed as an argument.
function makeSound(key) {
    // Use a switch statement to determine which sound to play based on the inner HTML of the button
    switch (key) {
        case "w":
            var tom1 = new Audio(".tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio(".tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio(".tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio(".tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio(".snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio(".crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio(".kick-bass.mp3");
            kickBass.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    // Add the CSS class "pressed" to the activeButton element.
    activeButton.classList.add("pressed");

    // Use setTimeout to remove the "pressed" class after 100 milliseconds.
    setTimeout(function() {
        activeButton.classList.remove("pressed");        
    }, 100);
}
