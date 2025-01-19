const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

/*gsap.to('.box', {
  scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
  x: 500
});*/