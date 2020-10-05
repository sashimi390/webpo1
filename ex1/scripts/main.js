const myHeading = document.querySelector('h1');
myHeading.textContent = 'There are Snow Man';

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images//sno2.png') {
      myImage.setAttribute ('src','images//sno3.png');
    } else {
      myImage.setAttribute ('src','images//sno2.png');
    }
  }