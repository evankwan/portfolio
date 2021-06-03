const app = {};

app.init = () => {
  app.selectors();
  app.changePageNumber();
  app.eventListeners();
}

app.selectors = () => {
  app.currentPageNumber = document.getElementById('currentPageNumber');
  app.hamburger = document.getElementById('hamburger');
  app.hamburgerContainer = document.getElementById('hamburgerContainer');
  app.hamburgerToggler = document.getElementById('hamburgerToggler');
  app.header = document.getElementById('home');
  app.middleLine = document.getElementById('middleLine');
  app.navLinks = document.querySelectorAll('.navListItemLink');
  app.navMenu = document.getElementById('navMenu')
  app.projectPreviews = document.querySelectorAll('.projectPreview');
  app.sections = document.querySelectorAll('section');
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

app.changePageNumber = () => {
  const config = {
    threshold: 0,
    rootMargin: '-400px'
  }

  app.observer = new IntersectionObserver(app.onIntersection, config);
  app.observer.observe(app.header);
  app.sections.forEach((section) => {
    app.observer.observe(section);
  })
}

app.onIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const { target } = entry;
      let currentPage = '01';
      switch (target.id) {
        case 'home' :
          currentPage = '01';
          break;
        case 'about' :
          currentPage = '02';
          break;
        case 'projects' :
          currentPage = '03';
          break;
        case 'skills' :
          currentPage = '04';
          break;
        case 'experience' :
          currentPage = '05';
          break;
        case 'blog' :
          currentPage = '06';
          break;
        case 'contact' :
          currentPage = '07';
          break;
        default :
          currentPage = '07';
          break;
      }
      app.changeNavLinkColor(currentPage);
      app.currentPageNumber.textContent = currentPage;
    }

    app.observer.observe(entry.target);
  })
}

app.changeNavLinkColor = (pageNumberString) => {
  const pageNumber = parseInt(pageNumberString) - 1;
  app.navLinks.forEach((link, index) => {
    if (index === pageNumber) {
      link.classList.add('activeNavLink');
    } else {
      link.classList.remove('activeNavLink');
    }
  })
}

app.init();