window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');

    const colors = ["#60d394", "#d3a560", "#2ee016", "#f58e08", "#3e0cf3", "#eb0a8d"];

    console.log(sounds);


//operation with the sounds\
pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
    })
});

//function that creates bubble effect
const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
    })
}

});



