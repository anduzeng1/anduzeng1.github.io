var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/car.jpg') {
        myImage.setAttribute('src','images/car2.jpg');
    } else {
        myImage.setAttribute('src','images/car.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt('please enter you name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'the car is cool,' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'the car is cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}