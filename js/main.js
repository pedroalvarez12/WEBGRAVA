if (window.jQuery) {
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
}

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("particles-js");
    if (!container || typeof particlesJS === "undefined") return;

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 90,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.22
            },
            size: {
                value: 1.5,
                random: false
            },
            move: {
                enable: true,
                speed: 20,
                direction: "bottom",
                random: false,
                straight: true,
                out_mode: "out"
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });
});
