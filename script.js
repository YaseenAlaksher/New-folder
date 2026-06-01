const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.15
});

document
.querySelectorAll(
".skill-card,.project-card,.about-box,.contact-card,.hero-card"
)
.forEach(el=>observer.observe(el));

const text = "Front-End Developer";

const typing = document.getElementById("typing");

let index = 0;

function type(){

  if(index < text.length){

    typing.textContent += text.charAt(index);

    index++;

    setTimeout(type,80);
  }

}

type();

const progressBar =
document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

  const height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  const progress =
  (window.scrollY / height) * 100;

  progressBar.style.width =
  progress + "%";

});

const glow =
document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";

});

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

  card.addEventListener("mousemove",(e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    (x / rect.width - .5) * 10;

    const rotateX =
    -(y / rect.height - .5) * 10;

    card.style.transform =
    `perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-10px)`;

  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform =
    "translateY(0)";

  });

});