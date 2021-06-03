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
  app.navLinks = document.querySelectorAll('.navListItemLink');
  app.projectPreviews = document.querySelectorAll('.projectPreview');
}

app.eventListeners = () => {
  app.hamburgerToggler.addEventListener('click', () => {
    hamburger.classList.toggle('whiteHamburger');
    navMenu.classList.toggle('showMenu');
  });

  app.projectPreviews.forEach((project) => {
    project.addEventListener('click', () => {
      project.classList.toggle('projectFocused');
    })
    project.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        project.classList.toggle('projectFocused');
      }
    })
  })

  app.navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.toggle('whiteHamburger');
      navMenu.classList.toggle('showMenu');
    })

    link.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        hamburger.classList.toggle('whiteHamburger');
        navMenu.classList.toggle('showMenu');
      }
    })
  })
}

app.init();