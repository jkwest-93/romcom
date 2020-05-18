var randCover = document.querySelector('.cover-image');
var currentTitle = document.querySelector('.cover-title');
var currentDesc1 = document.querySelector('.tagline-1');
var currentDesc2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var savedCoversButton = document.querySelector('.view-saved-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');
var makeOwnCoverForm = document.querySelector("form");
var savedCoversSection = document.querySelector('.saved-covers-section');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

window.onload = randomCover;
randomCoverButton.addEventListener('click', randomCover);
makeOwnCoverButton.addEventListener('click', toggleMakeCover);
savedCoversButton.addEventListener('click', toggleSavedCovers);
homeButton.addEventListener('click', toggleHome);
makeOwnCoverForm.addEventListener('submit', createNewCover);
saveCoverBtn.addEventListener('click', saveCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover() {
  randCover.src = currentCover.cover;
  currentTitle.innerText = currentCover.title;
  currentDesc1.innerText = currentCover.tagline1;
  currentDesc2.innerText = currentCover.tagline2;
}

function randomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  displayCover();
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
  //call displaySavedCovers
}

function toggleHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function addToArrays() {
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1);
  descriptors.push(currentCover.tagline2);
}

function createNewCover() {
  var coverInput = userCover.value;
  var titleInput = userTitle.value;
  var desc1Input = userDesc1.value;
  var desc2Input = userDesc2.value;
  currentCover = new Cover(coverInput, titleInput, desc1Input, desc2Input);

  addToArrays();
  displayCover();
  toggleHome();
  event.preventDefault()
}
//function checkCovers() {
// for (var i = 0; i < savedCovers.length; i++) {
  //  if (savedCovers[i].contains(currentCover.cover) === false && savedCovers[i].includes(currentCover.title) && savedCovers[i].includes(currentCover.tagline1) && savedCovers[i].includes(currentCover.tagline2)) {
    //saveCover();

function saveCover() {
  savedCovers.push(currentCover);
}
//function displaySavedCovers() {
  //use innerHTML to add covers;
  //savedCoversSection.classList.add('mini-cover')
  //for (var i = 0; i < savedCovers.length; i++) {
    //savedCoversSection.innerHTML = `<img src=savedCover[i].cover> <h2 class="cover-title">savedCover[i].title</h2> <h3 class="tagline">`A tale of ${savedCover[i].tagline1} and ${savedCover[i].tagline2}</h3>`


/* Iteration 4
click save cover button, added to saved covers array
click twice, only saved once
click on saved covers button, see saved covers section w/all of the saved covers.
event listener for save cover button
calls function that adds that saved cover to the saved covers array, which holds objects in an array
each click runs through the array checking to make sure there are no duplicates (lots of &&)
when saved covers button is pressed, a function is called
this function will display each individual saved cover on the page with no duplicates

*/
