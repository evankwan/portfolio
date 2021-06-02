const app = {};

app.init = () => {
  app.selectors();
  app.eventListeners();
}

app.selectors = () => {
  app.hamburger = document.getElementById('hamburger');
  app.hamburgerToggler = document.getElementById('hamburgerToggler');
  app.hamburgerContainer = document.getElementById('hamburgerContainer');
  app.middleLine = document.getElementById('middleLine');
  app.navMenu = document.getElementById('navMenu')
}

app.eventListeners = () => {
  hamburgerToggler.addEventListener('click', () => {
    hamburger.classList.toggle('whiteHamburger');
    navMenu.classList.toggle('showMenu');
  })
}

app.init();