const btnWeb = document.querySelector('.btn-web');
const btnAplikasi = document.querySelector('.btn-aplikasi');
const btnUiUx = document.querySelector('.btn-uiux');

const cardsWeb = document.querySelectorAll('.card-web');
const cardsAplikasi = document.querySelectorAll('.card-aplikasi');
const cardsUiUx = document.querySelectorAll('.card-uiux');


window.addEventListener('DOMContentLoaded', () => {
    cardsAplikasi.forEach(card => card.classList.add('hidden'));
    cardsUiUx.forEach(card => card.classList.add('hidden'));
    cardsWeb.forEach(card => card.classList.remove('hidden'));
});

btnWeb.addEventListener('click', () => {
    cardsAplikasi.forEach(card => card.classList.add('hidden'));
    cardsUiUx.forEach(card => card.classList.add('hidden'));
    cardsWeb.forEach(card => card.classList.remove('hidden'));
});

btnAplikasi.addEventListener('click', () => {
    cardsWeb.forEach(card => card.classList.add('hidden'));
    cardsUiUx.forEach(card => card.classList.add('hidden'));
    cardsAplikasi.forEach(card => card.classList.remove('hidden'));
});

btnUiUx.addEventListener('click', () => {
    cardsWeb.forEach(card => card.classList.add('hidden'));
    cardsAplikasi.forEach(card => card.classList.add('hidden'));
    cardsUiUx.forEach(card => card.classList.remove('hidden'));
});




// sc gambar



// kontetn pengalam
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const containerTeks = document.querySelector(".container-teks");

    const onScroll = () => {
        const containerPosition = containerTeks.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (containerPosition < windowHeight - 100) { // Elemen mulai terlihat
            containerTeks.classList.add("show");
        }
    };

    window.addEventListener("scroll", onScroll);
});

// end konten pengalaman


// Get the navbar and sections
// Get the navbar and sections
const navbar = document.querySelector('.navbar');
const exprentSection = document.getElementById('exprent');
const projectSection = document.getElementById('project');
const skillSection = document.getElementById('skill');
const aboutSection = document.getElementById('about');

// Add scroll event listener
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  // Get the positions of sections
  const exprentPosition = exprentSection.offsetTop;
  const projectPosition = projectSection.offsetTop;
  const skillPosition = skillSection.offsetTop;
  const aboutPosition = aboutSection.offsetTop;

  // Hide navbar when in exprent, project or skill section
  if (scrollPosition >= exprentPosition && scrollPosition < projectPosition) {
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden";
  }
  else if (scrollPosition >= projectPosition && scrollPosition < skillPosition) {
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden";
  }
  else if (scrollPosition >= skillPosition) {
    navbar.style.opacity = "0"; 
    navbar.style.visibility = "hidden";
  }
  // Show navbar when in about section or top
  else {
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
  }
});






const navbarLeft = document.querySelector('.navbar-left');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (section.id === 'about') {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLeft.style.display = 'none';
            }
        } else if (section.id === 'exprent' || section.id === 'project' || section.id === 'skill') {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLeft.style.display = 'block';
            }
        }
    });
});




