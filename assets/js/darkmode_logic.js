const darkmodeBtn = document.querySelector(".darkmode");
const backToTopBtn = document.querySelector(".back-to-top");
const quote_Left = document.querySelectorAll(".quote-sign-left");
const quote_Right = document.querySelectorAll(".quote-sign-right");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

function setTheme(theme) {
  document.body.classList.remove(THEME_LIGHT, THEME_DARK);
  document.body.classList.add(theme);

  if (theme === THEME_DARK) {
    darkmodeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>';
    quote_Left.forEach((el) => {
      el.src = "./assets/img/quote-sign-left - light.webp";
    });
    quote_Right.forEach((el) => {
      el.src = "./assets/img/quote-sign-right - light.webp";
    });
  } else {
    darkmodeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>';
    quote_Left.forEach((el) => {
      el.src = "./assets/img/quote-sign-left.webp";
    });
    quote_Right.forEach((el) => {
      el.src = "./assets/img/quote-sign-right.webp";
    });
  }

  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || THEME_DARK;
  const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  setTheme(newTheme);

  if (newTheme === THEME_LIGHT) {
    backToTopBtn.classList.add("back-to-top");
    backToTopBtn.classList.remove("back-to-top-dark");
  } else {
    backToTopBtn.classList.remove("back-to-top");
    backToTopBtn.classList.add("back-to-top-dark");
  }
}

// Set theme based on user preference or default to dark theme
if (localStorage.getItem("theme") === null) {
  setTheme(prefersDarkScheme.matches ? THEME_DARK : THEME_LIGHT);
} else {
  setTheme(localStorage.getItem("theme"));
}

darkmodeBtn.addEventListener("click", toggleTheme);
