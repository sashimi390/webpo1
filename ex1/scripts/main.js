let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images//sno2.png') {
        myImage.setAttribute('src', 'images//sno3.png');
    } else {
        myImage.setAttribute('src', 'images//sno2.png');
    }
}