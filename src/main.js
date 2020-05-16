var randCover = document.querySelector('.cover-image');
var currentTitle = document.querySelector('.cover-title');
var currentDesc1 = document.querySelector('.tagline-1');
var currentDesc2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var savedCoversButton = document.querySelector('.view-saved-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

window.onload = randomCover;
randomCoverButton.addEventListener('click', randomCover);
makeOwnCoverButton.addEventListener('click', toggleMakeCover);
savedCoversButton.addEventListener('click', toggleSavedCovers);
homeButton.addEventListener('click', toggleHome);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomCover() {
  currentCover = new Cover (randCover.src =                     covers[getRandomIndex(covers)], currentTitle.innerText = titles[getRandomIndex(titles)], currentDesc1.innerText = descriptors[getRandomIndex(descriptors)], currentDesc2.innerText = descriptors[getRandomIndex(descriptors)]);
}

function toggleMakeCover() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
}

function toggleSavedCovers() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}

function toggleHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

//Iteration 3
//In the form field, user should fill out 4 input fields & hit save button
//Input and data need to be put in their respective arrays
//Use the values from the inputs to create a new cover (new object from cover class)
//Event listener: user clicks save button
//Event handler: function to change back to the main home view (add hidden property), with new cover displayed
