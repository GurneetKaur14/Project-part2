document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
    this.reset();
});

$(document).ready(function () {
    // Add overlay and enlarged image dynamically
    $('body').append('<div class="overlay"></div>');
    $('body').append('<img class="enlarged-image" src="" alt="Enlarged Image">');

    // Enlarge image on click
    $('.gallery-item').on('click', function () {
        const imageUrl = $(this).attr('src');
        $('.enlarged-image').attr('src', imageUrl).fadeIn();
        $('.overlay').fadeIn();
    });

    // Close enlarged image on clicking the overlay
    $('.overlay').on('click', function () {
        $('.enlarged-image').fadeOut();
        $('.overlay').fadeOut();
    });
});
