// JavaScript to enhance parallax effects

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    document.querySelectorAll('.parallax').forEach(function(element) {
        let speed = element.getAttribute('data-speed');
        element.style.backgroundPositionY = (scrollPosition * speed) + 'px';
    });
});


