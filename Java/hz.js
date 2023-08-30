const slider = document.querySelector ('.slide__image');
const prevButton = document.querySelector ('.arrow__prev');
const nextButton = document.querySelector ('.arrow__next');
const slides = Array.from (slider.querySelectorAll ('img'));
const slideCount = slides.length;
let slideIndex = 0;


prevButton.addEventListener ('click', showPreviousSlide);
nextButton.addEventListener ('click', showNextSlide);

function showPreviousSlide () {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    upadetSlider ();
}


function showNextSlide () {
    slideIndex = (slideIndex + 1) % slideCount;
    upadetSlider ();
}

function upadetSlider () {
    slides.forEach ((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

upadetSlider ();