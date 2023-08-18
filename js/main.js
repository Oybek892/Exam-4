//Back

window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backtop.style.bottom = "25px";
    } else {
      backtop.style.bottom = "-50px";
    }
  }

  //stiky
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "40px 80px";
    document.getElementById("navbar").style.marginTop = "-50px";
  } else {
    document.getElementById("navbar").style.padding = "40px 80px"; 
    document.getElementById("navbar").style.marginTop = "1px";
  }
}
let modeBtn = document.getElementById("dark-light");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
// /////////
const nav = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-link");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

for (let navLink of navLinks) {
  navLink.addEventListener("click", function () {
    nav.classList.remove("open");
  });
}
//
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
