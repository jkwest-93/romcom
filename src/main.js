// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//Iteration 0
function randomCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

  return newBook = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
}
//When page loads, user see: 1) random cover image, 2) random title, 3) tagline with two random descriptors
//Create a function for randomizing data arrays (getRandomIndex function)
//Pass in covers, title, and descriptor arrays
//Create a new variable for randomized cover/title/descriptor(x2) index
//Return new cover object

//Iteration 1
//Every time user clicks "Show random cover" button, new random cover is created
//Create a new cover object using cover class, piping in random variables
//Event listener: click (calls random cover generator) -> new object
//Event handler: the randomCover & replace old cover functions
//Update existing cover to return new object
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
