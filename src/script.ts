const app = {
  selectors: {
    creditsList: null,
    creditsTitle: null,
    currentPageNumber: null,
    hamburger: null,
    hamburgerContainer: null,
    hamburgerToggler: null,
    header: null,
    middleLine: null,
    navLinks: null,
    navMenu: null,
    projectPreviews: null,
    sections: null,
  },
  init: () => {
    app.initSelectors();
    app.changePageNumber();
    app.initEventListeners();
  },
  initSelectors: () => {
    app.selectors.creditsList = document.getElementById('creditList');
    app.selectors.creditsTitle = document.getElementById('creditsTitle');
    app.selectors.currentPageNumber = document.getElementById('currentPageNumber');
    app.selectors.hamburger = document.getElementById('hamburger');
    app.selectors.hamburgerContainer = document.getElementById('hamburgerContainer');
    app.selectors.hamburgerToggler = document.getElementById('hamburgerToggler');
    app.selectors.header = document.getElementById('home');
    app.selectors.middleLine = document.getElementById('middleLine');
    app.selectors.navLinks = document.querySelectorAll('.navListItemLink');
    app.selectors.navMenu = document.getElementById('navMenu')
    app.selectors.projectPreviews = document.querySelectorAll('.projectPreview');
    app.selectors.sections = document.querySelectorAll('header, section');
  },
  initEventListeners: () => {
    app.selectors.hamburgerToggler.addEventListener('click', () => {
      app.selectors.hamburger.classList.toggle('whiteHamburger');
      app.selectors.navMenu.classList.toggle('showMenu');
    });
  
    app.selectors.projectPreviews.forEach((project) => {
      project.addEventListener('click', () => {
        project.classList.toggle('projectFocused');
      })
      project.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          project.classList.toggle('projectFocused');
        }
      })
    })
  
    app.selectors.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        app.selectors.hamburger.classList.toggle('whiteHamburger');
        app.selectors.navMenu.classList.toggle('showMenu');
      })
  
      link.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          app.selectors.hamburger.classList.toggle('whiteHamburger');
          app.selectors.navMenu.classList.toggle('showMenu');
        }
      })
    })
  
    app.selectors.creditsTitle.addEventListener('click', () => {
      app.selectors.creditsList.classList.toggle('hideList');
    })
  },

  observer: undefined,
  changePageNumber: () => {
    const config = {
      root: null,
      threshold: [0.36, 0.7],
      rootMargin: '0px'
    }
  
    app.observer = new IntersectionObserver(app.onIntersection, config);
    app.observer.observe(app.selectors.header);
    app.selectors.sections.forEach((section) => {
      app.observer.observe(section);
    })
  },
  onIntersection: (entries) => {
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
            app.selectors.projectPreviews.forEach((project) => {
              project.classList.remove('noBgImage');
            });
            break;
          case 'projects' :
            currentPage = '03';
            app.selectors.projectPreviews.forEach((project) => {
              project.classList.remove('noBgImage');
            });
            break;
          case 'skills' :
            currentPage = '04';
            app.selectors.projectPreviews.forEach((project) => {
              project.classList.remove('noBgImage');
            });
            break;
          case 'contact' :
            currentPage = '05';
            break;
          default :
            currentPage = '05';
            break;
        }
        app.changeNavLinkColor(currentPage);
        app.selectors.currentPageNumber.textContent = currentPage;
      }
  
      app.observer.observe(entry.target);
    })
  },
  changeNavLinkColor: (pageNumberString) => {
    const pageNumber = parseInt(pageNumberString) - 1;
    app.selectors.navLinks.forEach((link, index) => {
      if (index === pageNumber) {
        link.classList.add('activeNavLink');
      } else {
        link.classList.remove('activeNavLink');
      }
    })
  }
}

app.init()