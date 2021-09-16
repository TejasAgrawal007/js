console.log("Welcome to Dom Events in JS");


// <!-- ***___Selctors___*** -->

// 1. getElementById

// const heading = document.getElementById('heading');
// console.log(heading);


// 2. getElementByClassName

// const heading = document.getElementsByClassName('heading');
// console.log(heading);


// 3. getElementbyTagName

// const heading = document.getElementsByTagName('h1');
// console.log(heading);


// 4. querySelector

// const bhushan = document.querySelector('.heading');
// console.log(bhushan);


// 5. querySelectorAll

// const arti = document.querySelectorAll('.heading');
// console.log(arti);




// <!-- ***___DOM traversing___*** -->



// 1. ParentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);


// 2. ChildNode

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes)


// 3. nextElementSibling

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


// 4. previousElementSibling

// const subHeading = document.querySelector('.subHeading');
// console.log(subHeading.previousElementSibling);




// <!-- ***___Manuplation___*** -->


// const heading = document.querySelector('.heading');
// heading.innerHTML = "Bhushan & samyak Replay Karo";
// heading.style.color = "red";
// heading.style.fontSize = "56px" ;