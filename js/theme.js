const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark-mode");
  themeButton.setAttribute("aria-label", "Switch to light mode");
}

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  const isDarkMode = document.documentElement.classList.contains("dark-mode");

  if (isDarkMode) {
    themeButton.setAttribute("aria-label", "Switch to light mode");
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.setAttribute("aria-label", "Switch to dark mode");
    localStorage.setItem("theme", "light");
  }
});
