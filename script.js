function simularCompra() {
  alert("Pronto estará disponible para su compra online.");
}

const botonMenu = document.getElementById('botonMenu');
const menu = document.querySelector('#menu ul');

botonMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('mostrar');
});

menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  menu.classList.remove('mostrar');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('mostrar');
  });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
  form.reset();
});