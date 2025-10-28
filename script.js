$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a.nav-link, a.btn').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Form submission (basic alert for demo)
    $('.contact-form').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        if (name && email && message) {
            alert('Thank you, ' + name + '! Your message has been sent.');
            $(this)[0].reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Fade in sections on scroll
    $(window).scroll(function() {
        $('.section').each(function() {
            var top = $(this).offset().top - 100;
            var bottom = top + $(this).outerHeight();
            var scroll = $(window).scrollTop();
            if (scroll >= top && scroll <= bottom) {
                $(this).animate({ opacity: 1 }, 500);
            }
        });
    });
});