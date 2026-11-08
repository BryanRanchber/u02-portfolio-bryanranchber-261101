const menuButton = document.querySelector(".menu-button");
const tabList = document.querySelector(".tablist");
const socialLinks = document.querySelector(".social-links");

menuButton.addEventListener("click", () => {
  tabList.classList.toggle("menu-open");
  socialLinks.classList.toggle("menu-open");
  const isMenuOpen = tabList.classList.contains("menu-open");
  menuButton.setAttribute("aria-expanded", isMenuOpen);

  if (isMenuOpen) {
    menuButton.setAttribute("aria-label", "Close navigation");
  } else {
    menuButton.setAttribute("aria-label", "Open navigation");
  }
});
