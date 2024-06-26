const scroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true,
  lerp: 0.1,
});
// let headheading = document.querySelector(".header-heading h1");
// let texthead = headheading.textContent,
//   spltr = texthead.split(""),
//   clutters = "";
// spltr.forEach((values) => {
//   clutters += `<span class="a">${values}</span>`;
//   headheading.innerHTML = clutters;
// });

gsap.from(".a", {
  y: 80,
  duration: 1,
  delay: 0.5,
  stagger: 0.09,
  opacity: 0,
  //   ease: "power3.out",
});

let menu = document.querySelector(".menu-icon");
let cross = document.querySelector(".cross-icon");
// let move = document.querySelector(".move");
// let divmenu = document.querySelector(".menu");
// divmenu.addEventListener("mousemove", (e) => {
//   // console.log(e.clientX);
//   gsap.to(".move", {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 1,
//     ease: "power3.out",
//   });
// });

// Initial hidden state of the menu
gsap.set(".menu-bar", {
  transform: "translateX(100%)",
  opacity: 0,
});

cross.addEventListener("click", () => {
  gsap.to(".menu-bar", {
    transform: "translateX(100%)",
    duration: 1,
    opacity: 0,
  });
});

menu.addEventListener("click", () => {
  gsap.to(".menu-bar", {
    transform: "translateX(0%)", // Change to 0% for full visibility
    duration: 1,
    opacity: 1, // Ensure opacity is set to 1 when menu is visible
  });
});
