const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=0; i<5; i++){
    const newImage=document.createElement('img');
    newImage.setAttribute('src','images/pic'+(i+1)+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick=function(e){
        displayedImage.src=e.target.src;
    }
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
