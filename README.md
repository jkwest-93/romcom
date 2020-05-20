# 2005 FE Mod 1- Romance Novel Generator (Partner Project)

## Project & Goals
### Project description
This project represents the collaborative efforts of Taryn Martin and Jake West. This is our first paired project in Mod 1 of the Turing Front End Program (Cohort 2005). We were tasked with building an app that generates romance novel covers, populated by a random cover image, title, and two subtitle descriptors. We were given a existing codebase for CSS styling elements & HTML elements to manipulate, as well as data arrays to reference & a constructor element to create objects. We were responsible for using JavaScript to build out further functionality. This project was broken into multiple iterations, each with unique requirements (described below). The functionality we successfully built includes:
  1. random cover generator
  2. button functionality to switch views
  3. form functionality so users can create custom covers
  4. button functionality so users can save current cover
  5. ability to display all saved covers
  6. automatically prevent duplicate covers from being saved

### Learning Goals
* Deepen our understanding of JavaScript syntax & logic
* Learn how JavaScript interacts with CSS & HTML code, as well as DOM elements
* Minimize external research & rely on skills we've built
* Comprehension > production
* Strengthen our skills as collaborators on a project

## Project Status
Currently in development: develop future functionality outlined in next steps (below)

## Project Screenshots
1. When the page is loaded or re-loaded, a new random cover appears. Each cover is a unique combination of an image, title, and two descriptor taglines. This page is the Home View.
![](random_cover_reload.gif)

2. Any time a user clicks the "Show New Random Cover" button, a new random cover appears. Each cover is a unique combination of an image, title, and two descriptor taglines. This page is the Home View.
![](random_cover_button_click.gif)

3. When the user clicks the "Save Cover" button, the application stores the current cover. The data from this cover may be displayed into new random covers. Currently, any user input is only stored until the window is refreshed.
![](save_cover_button.gif)

4. When a user clicks the "View Saved Covers" button, Saved Covers View appears. This shows the user all of the covers they have saved.
![](saved_covers_view.gif)

5. When the user clicks the "Make Your Own Cover" button, they see Form View. Here, the user can upload a link to a .jpg image and submit custom titles and descriptors.
![](make_cover_view.gif)

6. When the user clicks the "Make my Book" button, they are taken back to the Home View & their new cover is displayed. Users must hit the "Save Cover" button to save this cover!
![](make_own_cover.gif) 

7. Users can switch from view to view with no issues. Originally, we approached this using the `toggle` method. We eventually realized that using `add` and `remove` allowed us to apply the `hidden` class to each of our views with more precision.
![](button_functionality.gif)

## Next Steps
As we continue this project, there are several functionality and styling changes we would like to address:
  - Being able to delete covers from the saved covers section on double click
  - Require users to fill out all 4 user input fields to create a cover in the make your own cover site view
  - Change styling and data used to create covers to more match our personal tastes and those of our users
  - Title size on cover will change size based on length of title (longer titles will appear smaller and smaller titles will appear larger)
  - Clicking on a saved cover once will show you that cover on the home screen
  - Allow users to drag and drop saved posters into their own order 

## Reflection
Taryn Personal: This project was very eye opening for me. I was expecting to be able to take more of the stuff I learned from lessons and homework and apply it directly to what we needed to do. We ended up needing to do a lot more research and experimentation to achieve the end results called for in the project specs. I think that overall this was a very valuable experience on many fronts. I got more direct experience in what it will be like to work on a software project and how frustration can be a huge part of the process. I’ve learned more about what it’s like to work with a partner, both in person and remotely. I also learned a lot of directly applicable skills, such as more experience with git and GitHub. I also feel I have gained a better understanding of the role Javascript plays in website development, and how JS, CSS, HTML, data models, and the DOM all interact and use each other. Overall, I found this project to be incredibly helpful for furthering my knowledge and understanding of software development, especially coming into this program with no knowledge or experience.

Jake Personal: The Romance Novel Generator project was an exciting, albeit frustrating, chance to reflect on how much I've learned at Turing in the past few weeks. Initially, I started this project apprehensive about partner work & skeptical of ability to contribute because I often feel overwhelmed by the material. I also felt unsure about how/when/to whom to reach out for help. Along the way, there was a lot of celebrating achievements, immense learning, and ample struggle. In the end, I'm proud of our final product! No, we did not get EVERY piece of functionality- and that's okay- because Taryn and I collaborated and grew together. My biggest growth moment has to be a new-found comfort for asking for help and identifying cohort-mates that I feel really comfortable reaching out to. I look forward to growing these skills in the future!

As we often found throughout this project, our unique perspectives complement each other well! Both of our personal reflections speak to the other person's experience. This was a great growth moment for both of us & we both feel more confident moving along our journey to becoming software developers!

## Links
+ Deployed Site: https://jkwest-93.github.io/romcom/
+ Taryn Martin GitHub: https://github.com/bjjdestroyer
+ Jake West GitHub: https://github.com/jkwest-93/
