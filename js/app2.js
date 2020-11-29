// menu
const menu = document.querySelector(".menu"),
  nav = document.querySelector(".nav"),
  bar = document.querySelector("#bar");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
  bar.classList.toggle("fa-times");

  console.log(menu);
});

//header

const a1 = document.getElementById("a1"),
  a2 = document.getElementById("a2"),
  header = document.getElementById("header"),
  header_container = document.querySelector("#header .container"),
  fixed_social = document.getElementById("fixed-social");

const scrollF = () => {
  let h = window.scrollY;

  console.log(h, "h");
  if (h > 150) {
    header.style.opacity = "0.9";
    header.style.borderBottom = "1px solid var(--timeline-secondary-color)";
    if (h > 1200) {
      a1.className = "";
      a2.className = "current";
      console.log(a2);
    }
  } else {
    header.style.borderBottom = "none";
    header.style.opacity = "1";
    a2.className = "";
    a1.className = "current";
  }

  //
};
window.addEventListener("scroll", scrollF);

//
