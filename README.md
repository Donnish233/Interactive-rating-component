# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![./public/Screeshot.png](./public/Screeshot.png)

### Links

- Solution URL: [My-Solution](https://github.com/Donnish233/Interactive-rating-component)
- Live Site URL: [Live deployment link](https://interactive-rating-component-sand-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned
I learnt about conditional style rendering, based on the state of my dynamic component.

```jsx
<div className="rating-buttons w-full flex gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            className={`w-11 h-11 rounded-full transition-all duration-150 hover:cursor-pointer
              ${
                rating === num
                  ? "bg-white text-black"
                  : "bg-[#272E38] text-white hover:bg-amber-600"
              }
            `}
          >
            {num}
          </button>
```

### Useful resources

- [W3Schools React Tutorial](https://www.w3schools.com/react) - This helped me by explaining the difficult concepts regarding to React Props and State. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Donnish233](https://www.frontendmentor.io/profile/Donnish233)
- Twitter - [@ToxicDonni](https://www.twitter.com/ToxicDonni)
