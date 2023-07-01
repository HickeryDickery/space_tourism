# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshots

![Home Page](image.png)
![Destinations Page](image-1.png)
![Crew Page](image-2.png)
![Technology Page](image-3.png)

### Links

- Solution URL: [Code on GitHub](https://github.com/HickeryDickery/space_tourism)
- Live Site URL: [Deployed on Vercel](https://space-tourism-nu-eight.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For animations
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Responsive UI design

### What I learned

One of the key concepts I learned was the effective utilization of the `<AnimatePresence>` tag from the Framer-Motion library, which enables the implementation of exit animations not only for individual components but also for entire pages. Here's how it works: when a React component is unmounted, it is immediately removed from the DOM. However, by enclosing a motion component from the Framer-Motion library within the `<AnimatePresence>` tag, we can retain it in the DOM for a duration, allowing us to animate its exit gracefully. To achieve this, we simply provide the necessary initial and exit animation properties to the motion component. Also, keep in mind to utilize the mode prop of the `<AnimatePresence>` tag appropriately.

Animating pages requires some additional considerations, especially when using a router to navigate between them. In such cases, it's crucial to wrap the routes within the `<AnimatePresence>` tag. To animate the exit of the current page and the entrance of the new page, you should include a key prop within the `<Routes>` tag. You can use the useLocation hook from react-router-dom to retrieve the current location and use it as the key.

#### Examples

Code from `Crew` page showing how to animate components:

```html
<AnimatePresence mode="wait">
  <motion.span
    key={crew[crewIndex].role}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="text-h4-mobile sm:text-h4-tablet lg:text-h4-desktop font-bellefair text-gray-400"
  >
    {crew[crewIndex].role.toUpperCase()}
  </motion.span>
</AnimatePresence>
```

Code from `AnimatedRoutes` component showing how to animate pages:

```js
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Crew, Destination, Technology } from "./pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
```

### Continued development

Framer-Motion has an extensive set of beautiful animations and can be used to make websites more interactive. Till now I have only used it for simple animations like fade-in, fade-out, etc. I would love to learn more about it and use it to make more complex animations.

Tailwindcss is a great CSS utility framework and allows for faster development owing to shorthand styling. Although I have extensively used it, I am still unfamiliar with its theming and dark mode features. It would be an interesting challenge to explore this and would make for a useful skill.

### Useful resources

- [Framer-Motion Documentation](https://www.framer.com/motion/) - The documentaion is fairly well written and has some interesting examples as well. However, I sometimes found it to be a bit lacking. Nonetheless, it is an extremely good resource for anyone looking to learn Framer-Motion.
- [TailwindCSS Documentation](https://tailwindcss.com/) - A lifesaver for checking out the various utility classes and their usage. The documentation is very well written and has a lot of examples as well.

## Author

- Website - [Khizar Nawab](https://www.your-site.com)
- Frontend Mentor - [@HickeryDickery](https://www.frontendmentor.io/profile/HickeryDickery)
- GitHub - [@HickeryDickery](https://github.com/HickeryDickery)
