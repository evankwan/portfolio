export type NavLink = {
  id: string;
  text: string;
  onClick: (e?: Event) => void;
}

export const navLinks: NavLink[] = [
  {
    id: "home",
    text: "/ home",
    onClick: (e?: Event) => {
      console.log("click")
    }
  },
  {
    id: "about",
    text: "/ about",
    onClick: (e?: Event) => {
      console.log("click")
    }
  },
  {
    id: "projects",
    text: "/ projects",
    onClick: (e?: Event) => {
      console.log("click")
    }
  },
  {
    id: "contact",
    text: "/ contact",
    onClick: (e?: Event) => {
      console.log("click")
    }
  },
]
