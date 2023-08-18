'use strict'


const pictures = ["1.jpg", "2.jpg", "3.jpeg", "4.webp", "5.avif"];

let curretPicture = 1;

document.getElementById("backward").addEventListener("click", (e)=>{

    backwards();

})

document.getElementById("forward").addEventListener("click", (e)=>{

    forwards();

})

function forwards() {

    ++curretPicture;

    if(curretPicture == pictures.length) {

        curretPicture = 0;

    }

    document.getElementById("picture").src = pictures[curretPicture];
    
}

function backwards() {

    --curretPicture;

    if(curretPicture == -1) {

        curretPicture = pictures.length-1;

    }

    document.getElementById("picture").src = pictures[curretPicture];
    
}

