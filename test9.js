'use strict'


const pictures = ["1.jpg", "2.jpg", "3.jpeg", "4.webp", "5.avif"];

const pic1 = "White Kitten";
const pic3 = "Vicious Cat";
const pic4 = "Shark";
const pic5 = "Darkness";
const pic2 = "Orange";

const comments = [pic1, pic2, pic3, pic4, pic5];

let currentPicture = 1;

document.getElementById("backward").addEventListener("click", (e)=>{

    backwards();

})

document.getElementById("forward").addEventListener("click", (e)=>{

    forwards();

})

function forwards() {

    ++currentPicture;

    if(currentPicture == pictures.length) {

        currentPicture = 0;

    }

    document.getElementById("picture").classList.remove("pictureAnimation1");
    document.getElementById("picture").classList.remove("pictureAnimation2");
    document.getElementById("comment").classList.remove("textAnimation1");
    document.getElementById("comment").classList.remove("textAnimation2");
    document.getElementById("comment").classList.remove("textAnimation3");
    document.getElementById("comment").classList.remove("textAnimation4");

    document.getElementById("picture").addEventListener("animationend", function() {
		
        document.getElementById("picture").classList.remove("pictureAnimation1");
        document.getElementById("comment").classList.remove("textAnimation2");
    
        document.getElementById("picture").src = pictures[currentPicture];
        document.getElementById("comment").innerHTML = comments[currentPicture];
    
        document.getElementById("picture").classList.add("pictureAnimation2");
        document.getElementById("comment").classList.add("textAnimation1");
    
    });

    document.getElementById("picture").classList.add("pictureAnimation1");
    document.getElementById("comment").classList.add("textAnimation2");
    
}

function backwards() {

    --currentPicture;

    if(currentPicture == -1) {

        currentPicture = pictures.length-1;

    }

    document.getElementById("picture").classList.remove("pictureAnimation1");
    document.getElementById("picture").classList.remove("pictureAnimation2");
    document.getElementById("comment").classList.remove("textAnimation1");
    document.getElementById("comment").classList.remove("textAnimation2");
    document.getElementById("comment").classList.remove("textAnimation3");
    document.getElementById("comment").classList.remove("textAnimation4");

    document.getElementById("picture").addEventListener("animationend", function() {
		
        document.getElementById("picture").classList.remove("pictureAnimation1");
        document.getElementById("comment").classList.remove("textAnimation4");
    
        document.getElementById("picture").src = pictures[currentPicture];
        document.getElementById("comment").innerHTML = comments[currentPicture];
    
        document.getElementById("picture").classList.add("pictureAnimation2");
        document.getElementById("comment").classList.add("textAnimation3");
    
    });

    document.getElementById("picture").classList.add("pictureAnimation1");
    document.getElementById("comment").classList.add("textAnimation4");

}
