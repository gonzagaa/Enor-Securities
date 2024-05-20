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

  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.caixaFormulario');
    let currentSectionIndex = 0;

    document.querySelectorAll('.Proximo').forEach(button => {
        button.addEventListener('click', () => {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex++;
            if (currentSectionIndex < sections.length) {
                sections[currentSectionIndex].classList.add('active');
            }
        });
    });

    document.querySelectorAll('.Voltar').forEach(button => {
      button.addEventListener('click', () => {
          sections[currentSectionIndex].classList.remove('active');
          currentSectionIndex--;
          if (currentSectionIndex >= 0) {
              sections[currentSectionIndex].classList.add('active');
          }
      });
  });
});



var details = [...document.querySelectorAll('details')];
document.addEventListener('click', function(e){
  if(details.some(f => f.contains(e.target)).length != 0){
    details.forEach(f => f.removeAttribute('open'));
  }
})
