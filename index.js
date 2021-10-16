for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);});
}
  document.addEventListener("keypress", function(event) {

        makeSound(event.key);
        buttonAnimation(event.key);
    });

function makeSound(value) {
    var audio
    switch (value) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play()
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            audio.play()
            break;

        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play()
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play()
            break;
        case "j":
            audio = new Audio('sounds/snare.mp3');
            audio.play()
            break;
        case "k":
            audio = new Audio('sounds/crash.mp3');
            audio.play()
            break;
        case "l":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play()
            break;
        default:
            break;
    }}

function buttonAnimation(currentKey)
{
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout( function(){document.querySelector("."+currentKey).classList.remove("pressed")}, 100);

}