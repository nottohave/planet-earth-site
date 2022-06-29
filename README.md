# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![](./preview.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS custom styles components

### What I learned

- I learned how to make navigation and planet tabs in javascript files. I learned to construct CSS styled components. The challenging part is where I have to construct the structure of HTML and CSS for mobile, tablet and desktop. Keeping the design to flow through and not break out is difficult. Also, I had to look up several sources to make a function in planet-tabs.js doing two tasks. One is to switch paragraph to structure, and the other is hide and display the image. 

```html
  <p class="overview-src ff-sans-normal fs-600" id="overview">
    <span class="ff-sans-normal fs-600">Source: </span>
    <a class="ff-sans-cond fs-700 text-white" href="https://en.wikipedia.org/wiki/Mars" target="_blank">Wikipedia</a>
    <img src="./assets/icon-source.svg" alt="planet information">
  </p>
```
```css
.tbldsk-planet-name button {
    height: 2.5rem;
    background: hsl( var(--clr-black) );
    color: hsl( var(--clr-white) );
    text-align: left;
    padding-inline: 1.25rem;
    font-weight: 700;
    border: 1px solid #97979792;
    letter-spacing: 2px;
    line-height: 25px;
}
```
```js
  for (i = 0; i< showPlanetInfo.length; i++) {
      showPlanetInfo[i].removeAttribute("hidden");
  }

  // unhighlight all buttons
  for (i = 0; i < tab.length; i++) {
      tab[i].setAttribute("aria-selected", false);
  }

```


## Acknowledgments

Thank you [@frontendmentor]() for creating this project.