(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links (delegated for React rendering)
    $(document).on('click', '.navbar-nav a, .navbar-brand', function (event) {
        if (this.hash !== "" && $(this.hash).length) {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }

            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });


    // Modal Video (delegated for React rendering)
    $(document).ready(function () {
        var $videoSrc;
        $(document).on('click', '.btn-play', function () {
            $videoSrc = $(this).data("src");
        });

        $(document).on('shown.bs.modal', '#videoModal', function () {
            if ($videoSrc) {
                $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
            }
        });

        $(document).on('hide.bs.modal', '#videoModal', function () {
            $("#video").attr('src', $videoSrc || "");
        });
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);
