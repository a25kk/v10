'use strict';
(function ($) {
    loadCSS( "css/v10.min.css", window.document.getElementsByTagName( "link" )[ 0 ] );
    var $appNavbar = $('#app-navbar');
    $(window).scroll(function () {
        if ($appNavbar.offset().top > 50) {
            $appNavbar.addClass('app-navbar-collapse');
        } else {
            $appNavbar.removeClass('app-navbar-collapse');
        }
    });
    $(document).ready(function () {
        if ($('body').hasClass('lt-ie7')) {
            return;
        };
        var bLazy = new Blazy({
            selector: '.app-img'
        });
        $('.carousel').carousel();
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({ scrollTop: target.offset().top }, 1000);
                    return false;
                }
            }
        });
    });
}(jQuery));