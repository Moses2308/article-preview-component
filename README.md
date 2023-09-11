# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/Screenshot%202023-09-11%20at%2012.28.24%20PM.png)

### Links

- Solution URL: [Github](https://github.com/Moses2308/article-preview-component)
- Live Site URL: [Netlify](https://willowy-hummingbird-d77b1d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project I learned how to use the after psuedo-element in a stylistic way. I also learned how to make an element that hovers over a specific object.

```css
.share__toggle::after {
  content: "";
  display: block;
  width: 2rem;
  height: 2rem;
  transform: rotate(45deg);
  top: 60%;

  background-color: var(--color-veryDarkGrayishBlue);
  position: absolute;
  z-index: -1;
}
```

### Continued development

This project taught showed me the tactics needed to make certain things work. I'd like to continue doing difficult projects, and tackle projects that are more complex so that I can become familiar with the different methods used to achieve certain effects.

## Author

- Frontend Mentor - [@Moses2308](https://www.frontendmentor.io/profile/Moses2308)
