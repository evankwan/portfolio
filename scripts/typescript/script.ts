import app from "./framework/app.js"
import type { AppConfig } from "./framework/app.js"

import { navLinks } from "./navLinks.js"
import type { NavLink } from "./navLinks.js"

const config: AppConfig = {
  state: {},
  elements: {
    $navbar: "navbar",
    $hamburgerToggler: "hamburger-toggler",
    $hamburger: "hamburger",
    $navLinksContainer: "nav-links-container"
  },
  methods: {
    initColorScheme: () => {
      if (window.matchMedia('(prefers-color-scheme: light)')?.matches) {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
      } else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
      }
    },
    addNavLinks: () => { // TODO: make more efficient - single loop, add each time, add event listener each iteration
      app.$navLinksContainer.innerHTML = navLinks.reduce((temp: string, link: NavLink) => `
        ${temp}
        <li>
          <button id="nav-link-${link.id}">
            ${link.text}
          </button>
        </li>
      `, "")

      navLinks.forEach((link: NavLink) => {
        const button = document.getElementById(`nav-link-${link.id}`)
        button?.addEventListener("click", (e) => {
          link.onClick(e)
        })
      })
    }
  },
  onMounted: () => {
    app.initColorScheme()
    app.addNavLinks()
  },
  watch: {
    $hamburgerToggler: {
      on: "click",
      cb: () => {
        app.$navbar.classList.toggle("toggled")
        app.$hamburger.classList.toggle("toggled-hamburger")
      },
    },
  },
}

app.mount(config)
