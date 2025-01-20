window.addEventListener('load', () => {
  const playButton = document.getElementById('play-button');
  const music = document.getElementById('background-music');

  playButton.addEventListener('click', () => {
    music.play(); playButton.style.display = 'none';
  });
})

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

document.querySelector('.next').addEventListener('click', () => showSlides(slideIndex + 1));
document.querySelector('.prev').addEventListener('click', () => showSlides(slideIndex - 1));

function showSlides(index) {
  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-slideIndex * 99.3}%)`;
}

setInterval(() => showSlides(slideIndex + 1), 5000);

const startDate = new Date('2020-11-02');
const datePart = document.getElementById('date-part');
const timePart = document.getElementById('time-part');

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  // Ajuste para casos em que dias sejam negativos
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  // Ajuste para casos em que meses sejam negativos
  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  datePart.innerHTML = `${years} anos, ${months} meses, ${days} dias`;
  timePart.innerHTML = `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();


function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  document.body.appendChild(heart);

  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

