const app: any = {};

app.init = () => {
  app.initColorScheme()
  app.initializeSelectors()
  app.initializeEventListeners()
}

app.initColorScheme = () => {
  if (window.matchMedia('(prefers-color-scheme: light)')?.matches) {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  } else {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  }
}

app.initializeSelectors = () => {
  app.$navbar = document.getElementById("navbar")
  app.$hamburgerToggler = document.getElementById("hamburger-toggler")
  app.$hamburger = document.getElementById("hamburger")
}

app.initializeEventListeners = () => {
  app.$hamburgerToggler.addEventListener("click", () => {
    app.$navbar.classList.toggle("toggled")
    app.$hamburger.classList.toggle("toggled-hamburger")
  })
}

app.init()
