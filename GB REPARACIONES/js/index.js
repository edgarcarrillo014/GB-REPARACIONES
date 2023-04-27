
const scrollButton = document.querySelector('.scroll-button');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

 const carrusel = document.querySelector('.carrusel');
const carruselContenedor = document.querySelector('.carrusel-contenedor');
const carruselItems = carruselContenedor.querySelectorAll('.carrusel-item');
const anchoCarrusel = carrusel.offsetWidth;

let indice = 0;

setInterval(() => {
  indice++;
  if (indice > carruselItems.length - 1) {
    indice = 0;
  }
  carruselContenedor.style.transform = `translateX(-${anchoCarrusel * indice}px)`;
}, 5000);
 

<script type="text/javascript">
  $(document).ready(function(){
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000, // Velocidad de transición de las imágenes
      centerMode: true, // Activa el modo centrado
      variableWidth: true // Añade esta opción para que las imágenes tengan diferentes anchuras
    });
  });
</script>


