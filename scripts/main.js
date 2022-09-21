document.querySelector('h2').addEventListener('click', function () {
    alert('Perdu !!');
});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/hérisson.jpeg') {
        myImage.setAttribute('src', 'images/mirage.jpg');
    } else {
        myImage.setAttribute('src', 'images/hérisson.jpeg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bonjour ' + myName + ", comment ça va ?";
}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bonjour ' + storedName + ", comment ça va ?";
}

myButton.addEventListener('click', function () {
    setUserName();
});


