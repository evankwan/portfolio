const app: any = {};

app.elements = {};

app.init = () => {
  app.initializeSelectors()
  app.mountSidebar()
  console.log("test")
}

app.initializeSelectors = () => {
  app.elements.sidebarContainer = document.getElementById("navbarContainer");
}

app.mountSidebar = async() => {
  try {
    const response = await fetch("http://127.0.0.1:5500/components/side-navigation-bar.html")
    app.elements.sidebarContainer.innerHTML = await response.text()
  } catch (e) {
    console.error("Error fetching navigation sidebar")
  }
}

app.init()
