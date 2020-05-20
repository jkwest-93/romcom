var coverImg = document.querySelector('.cover-image');
var currentTitle = document.querySelector('.cover-title');
var currentDesc1 = document.querySelector('.tagline-1');
var currentDesc2 = document.querySelector('.tagline-2');
var randomCoverBtn = document.querySelector('.random-cover-button');
var makeOwnCoverBtn = document.querySelector('.make-new-button')
var homeBtn = document.querySelector('.home-button');
var saveViewBtn = document.querySelector('.save-cover-button');
var savedCoversBtn = document.querySelector('.view-saved-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');
var makeOwnCoverForm = document.querySelector('form');
var savedCoversSection = document.querySelector('.saved-covers-section');

var savedCovers = [
  new Cover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg', 'Sunsets and Sorrows', 'sunsets', 'sorrows')
];

var currentCover;

window.onload = randomizeCover;
randomCoverBtn.addEventListener('click', randomizeCover);
makeOwnCoverBtn.addEventListener('click', displayFormView);
savedCoversBtn.addEventListener('click', displaySavedView);
homeBtn.addEventListener('click', displayHomeView);
makeOwnCoverForm.addEventListener('submit', createUserCover);
saveViewBtn.addEventListener('click', saveCurrentCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover() {
  coverImg.src = currentCover.cover;
  currentTitle.innerText = currentCover.title;
  currentDesc1.innerText = currentCover.tagline1;
  currentDesc2.innerText = currentCover.tagline2;
}

function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  displayCover();
}

function displayFormView() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  saveViewBtn.classList.add('hidden');
  randomCoverBtn.classList.add('hidden');
}

function displaySavedView() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveViewBtn.classList.add('hidden');
  savedCoversSection.innerHTML = '';

  displaySavedCovers();
}

function displayHomeView() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeBtn.classList.add('hidden');
  randomCoverBtn.classList.remove('hidden');
  saveViewBtn.classList.remove('hidden');
}

function saveUserInput() {
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1);
  descriptors.push(currentCover.tagline2);
}

function createUserCover() {
  var coverInput = userCover.value;
  var titleInput = userTitle.value;
  var desc1Input = userDesc1.value;
  var desc2Input = userDesc2.value;

  currentCover = new Cover(coverInput, titleInput, desc1Input, desc2Input);

  displayCover();
  displayHomeView();
  event.preventDefault()
}

function checkDuplicateCovers() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      return false;
    }
  }

  return true;
}

function saveCurrentCover() {
  if (checkDuplicateCovers()) {
    savedCovers.push(currentCover);
  }

  saveUserInput();
}

function displaySavedCovers() {
  for (var i = 0; i < savedCovers.length; i++) {
    var miniSavedCovers = `
      <div class='mini-cover' data-id=${savedCovers[i].id}>
        <img class='cover-image' src=${savedCovers[i].cover}>
        <h2 class='cover-title'>${savedCovers[i].title}</h2>
        <h3 class='tagline'>A tale of <span class='tagline-1'>${savedCovers[i].tagline1}</span> and <span class='tagline2'>${savedCovers[i].tagline2}
      </div>`;

    savedCoversSection.insertAdjacentHTML('afterbegin', miniSavedCovers);
  };
};
