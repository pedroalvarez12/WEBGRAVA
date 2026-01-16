
$(document).ready(function() {
    $('.accordion-header').on('click', function() {
        var $content = $(this).next('.accordion-content');
        var $icon = $(this).find('.toggle-icon');

        $content.slideToggle(300);

        $(this).toggleClass('active');
                if ($icon.hasClass('bi-plus-lg')) {
            $icon.removeClass('bi-plus-lg').addClass('bi-dash-lg');
        } else {
            $icon.removeClass('bi-dash-lg').addClass('bi-plus-lg');
        }
    });
});
