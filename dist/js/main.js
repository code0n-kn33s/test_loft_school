$(document).ready(function() {
    var mount = $('.banner__bottom').children('input');

    Array.prototype.forEach.call(document.getElementsByName('check'), function(el) {
        el.onchange = function() {
            el.parentNode.style.backgroundColor = (el.parentNode.style.backgroundColor === '#8cc34b') ? '#fff' : '#8cc34b';
        };
    });

    mount.on('click', function() {
        var count = $('input:checked').length,
            $thisKurses = $(this).closest($('.kurses__item'));

        if ($("input:checked")) {
            $thisKurses.addClass("deactive");
            $thisKurses.fadeOut(600);
        }

        if (count - mount.length === 0) {
            $('#kurses__ending--banner').show();
        }
    });
});