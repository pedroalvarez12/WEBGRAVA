
$(document).ready(function() {
    $('.accordion-header').on('click', function() {
        // Toggle the content of the clicked header
        var $content = $(this).next('.accordion-content');
        var $icon = $(this).find('.toggle-icon');

        // Slide toggle the content
        $content.slideToggle(300);

        // Toggle icon between plus and dash (optional, if using specific classes)
        // Here we can rotate or switch classes. 
        // Simple approach: Toggle a class 'active' on the header or rotate the icon
        $(this).toggleClass('active');
        
        // Example icon switching if using Bootstrap icons bi-plus-lg and bi-dash-lg
        if ($icon.hasClass('bi-plus-lg')) {
            $icon.removeClass('bi-plus-lg').addClass('bi-dash-lg');
        } else {
            $icon.removeClass('bi-dash-lg').addClass('bi-plus-lg');
        }
    });
});
