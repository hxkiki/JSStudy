function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hxk.jpg') {
      myImage.setAttribute('src', 'images/test.png');
    } else {
      myImage.setAttribute('src', 'images/hxk.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
localStorage.clear();

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }