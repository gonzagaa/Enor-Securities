const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`
  cursorDot.style.top = `${posY}px`

  cursorOutline.style.left = `${posX}px`
  cursorOutline.style.top = `${posY}px`

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});
})


  AOS.init({
    duration: 1700,
  });

  
  const sectionHome = document.getElementById('home');
  const foguete = document.querySelector('.foguete');
  
  gsap.to(foguete, {
    y: -500,
    x: 0,
    opacity: 1,
    duration: 100,
    scrollTrigger: {
      trigger: sectionHome,
      start: 'center center',
      end: 'bottom top',
      scrub: true,
    }
  })