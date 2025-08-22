// ------------------ Hero Carousel ------------------
var currentIndex = 0;
var slides = document.querySelectorAll('.carousel-slide');
var dots = [
  document.getElementById('dot0'),
  document.getElementById('dot1'),
  document.getElementById('dot2')
];
var track = document.getElementById('carouselTrack');

function updateHeroCarousel() {
  track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateHeroCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateHeroCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateHeroCarousel();
}

setInterval(nextSlide, 4000); // Autoplay every 4 seconds


// ------------------ WhyMi Carousel ------------------
const whyMiTrack = document.getElementById('whyMiTrack');
const whyMiPrev = document.getElementById('whyMiPrev');
const whyMiNext = document.getElementById('whyMiNext');
const whyMiSlides = whyMiTrack.children;
const whyMiTotal = whyMiSlides.length;
let whyMiIndex = 0;

function getSlidesToShow() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

function updateWhyMiCarousel() {
  const slidesToShow = getSlidesToShow();
  whyMiTrack.style.transform = `translateX(-${whyMiIndex * (100 / slidesToShow)}%)`;
}

whyMiPrev.onclick = () => {
  const slidesToShow = getSlidesToShow();
  whyMiIndex = Math.max(whyMiIndex - 1, 0);
  updateWhyMiCarousel();
};

whyMiNext.onclick = () => {
  const slidesToShow = getSlidesToShow();
  whyMiIndex = Math.min(whyMiIndex + 1, whyMiTotal - slidesToShow);
  updateWhyMiCarousel();
};

window.addEventListener('resize', () => {
  const slidesToShow = getSlidesToShow();
  if (whyMiIndex > whyMiTotal - slidesToShow) {
    whyMiIndex = whyMiTotal - slidesToShow;
  }
  updateWhyMiCarousel();
});

updateWhyMiCarousel();
