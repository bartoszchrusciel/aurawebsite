let numerSlajdu = 1;
showSlides(numerSlajdu);

//kontrola poprzedni/nastepny
function plusSlides(n) {
    showSlides(numerSlajdu += n);
}

//kropeczki
function currentSlide(n) {
    showSlides(numerSlajdu = n); 
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slideImage");
    let dots = document.querySelectorAll(".single-dot");
    if (n > slides.length) {numerSlajdu = 1}
    if (n < 1) {numerSlajdu = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[numerSlajdu-1].style.display = "block";
    dots[numerSlajdu-1].className += " active";
}


function changeSlides() {
  let i;
  let slides = document.querySelectorAll(".slideImage");
  let dots = document.querySelectorAll(".single-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  numerSlajdu++;
  if (numerSlajdu > slides.length) {numerSlajdu = 1}
  slides[numerSlajdu-1].style.display = "block";
  dots[numerSlajdu-1].className += " active";
  setTimeout(changeSlides, 5000); // Change image every 2 seconds
}

changeSlides();