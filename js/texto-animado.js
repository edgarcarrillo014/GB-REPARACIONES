const texts = document.querySelectorAll(".text");
let currentText = 0;

function showText() {
  for (let text of texts) {
    text.classList.remove("active");
  }
  texts[currentText].classList.add("active");
  currentText = (currentText + 1) % texts.length;
}

setInterval(showText, 4800);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardBody = card.querySelector('.card-body');
    cardBody.style.display = cardBody.style.display === 'none' ? 'block' : 'none';
  });
});
