document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 500,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
    document.querySelector('.btn').addEventListener('click', function() {
        document.querySelector('.left-container').style.paddingTop = '1%';
        document.querySelector('.left-container').style.transition = 'padding-top 0.5s'
        document.querySelector('.question').style.display = 'block';
        document.querySelector('.answer').style.display = 'block';
    })
    document.querySelector('.btn-no').addEventListener('mouseover', function() {
        document.querySelector('.btn-no').style.transition = 'opacity 0.2s ease-out';
        document.querySelector('.btn-no').style.opacity = '0';
    })
    document.querySelector('.btn-no').addEventListener('mouseout', function() {
        document.querySelector('.btn-no').style.transition = 'opacity 0.2s ease-in';
        document.querySelector('.btn-no').style.opacity = '1';
    })
    document.querySelector('.btn-yes').addEventListener('click', function() {
        document.querySelector('.btn').style.display = 'none';
        document.querySelector('.left-container').style.paddingTop = '5%';
        document.querySelector('.left-container').style.transition = 'padding-top 0.5s'
        document.querySelector('.question').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
        document.querySelector('.thanks').style.display = 'block';
    })
    document.querySelector('#play').addEventListener('click', function() {
        Swal.fire({
            confirmButtonText: '<i class="far fa-play-circle" style="font-size:40px;"></i>',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                document.querySelector('#audio').play()
            }
        })
        document.querySelector('.swal2-popup').style.backgroundColor = 'rgba(0,0,0,.0)';
        document.querySelector('.swal2-confirm').style.backgroundColor = 'rgba(0,0,0,.0)';
        document.querySelector('.swal2-styled').style.boxShadow = '0 0 0 3px rgba(0,0,0,.0)/50%';
    })
    document.querySelector('#play').click();
});