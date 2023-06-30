/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow", "sans-serif"],
      "barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
    },
    fontSize: {
      "nav-desktop": ["16px", { letterSpacing: "2.7px" }],
      "nav-tablet": ["14px", { letterSpacing: "2.36px" }],
      "h1-desktop": ["150px"],
      "h1-mobile": ["80px"],
      "h2-desktop": ["100px"],
      "h2-tablet": ["80px"],
      "h2-mobile": ["56px"],
      "h3-desktop": ["56px"],
      "h3-tablet": ["40px"],
      "h3-mobile": ["24px"],
      "h4-desktop": ["32px"],
      "h4-tablet": ["24px"],
      "h4-mobile": ["16px"],
      "h5-desktop": ["28px", { letterSpacing: "4.75px" }],
      "h5-tablet": ["20px", { letterSpacing: "3.38px" }],
      "h5-mobile": ["16px", { letterSpacing: "2.7px" }],
      "sub1-desktop": ["28px"],
      "sub2-desktop": ["14px", { letterSpacing: "2.35px" }],
      "body-desktop": ["18px"],
      "body-tablet": ["16px"],
      "body-mobile": ["15px"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1040px",
    },
    extend: {
      colors: {
        primary: "#0b0d17",
        secondary: "#d0d6f9",
        tertiary: "#ffffff",
      },
      backgroundImage: {
        close: "/src/assets/shared/icon-close.svg",
        "hamburger-menu": "/src/assets/shared/icon-hamburger.svg",

        "home-desktop": "url('/src/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/src/assets/home/background-home-mobile.jpg')",

        "destination-desktop":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/src/assets/destination/background-destination-mobile.jpg')",

        "crew-desktop": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/src/assets/crew/background-crew-mobile.jpg')",

        "technology-desktop":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
