let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide")
     
    //for hide all slides

    for (let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slide.length) {
        slideIndex = 1;
    }

    //Show the current slide

    slides[slideIndex - 1].style.display = "block";

    // set a delay for the next slide

    setTimeout(showSlides,3000);
}

showSlides();


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
