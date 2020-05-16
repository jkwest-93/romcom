// Create variables targetting the relevant DOM elements here 👇

var randCover = document.querySelector('.cover-image');
var currentTitle = document.querySelector('.cover-title');
var currentDesc1 = document.querySelector('.tagline-1');
var currentDesc2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

var randCover = document.querySelector('.cover-image');
var currentTitle = document.querySelector('.cover-title');
var currentDesc1 = document.querySelector('.tagline-1');
var currentDesc2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', randomCover);
makeOwnCoverButton.addEventListener('click', toggleMode);

// Create your event handlers and other functions here 👇
window.onload = randomCover;

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//Iteration 0
function randomCover() {
  currentCover = new Cover (randCover.src = covers[getRandomIndex(covers)], currentTitle.innerText = titles[getRandomIndex(titles)], currentDesc1.innerText = descriptors[getRandomIndex(descriptors)], currentDesc2.innerText = descriptors[getRandomIndex(descriptors)]);
}

function toggleMode() {
  document.querySelector('.home-view').classList.toggle('hidden');
  document.querySelector('.form-view').classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
}
};

//Iteration 1
//Every time user clicks "Show random cover" button, new random cover is created
//Event listener: click (calls random cover generator)
//Event handler: the randomCover functions
//Display object: function to display info on the dom - push new random cover to the DOM tree replacing current class cover with new random variable values

//Iteration 2
//When a user clicks the make your own cover button, we should see form & home page view should be hidden
//Event listener: user click "make your own cover"
//Event handler: new function that changes html class to remove hidden for the form page
//Event handler: function that changes html class to hide the home page; save cover button hidden, new random cover button should be hidden; home button should be visible

//Iteration 3
//In the form field, user should fill out 4 input fields & hit save button
//Input and data need to be put in their respective arrays
//Use the values from the inputs to create a new cover (new object from cover class)
//Event listener: user clicks save button
//Event handler: function to change back to the main home view (add hidden property), with new cover displayed
