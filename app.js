document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    }
    document.head.append(script);
    document.querySelector('#play').addEventListener('click', function () {
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

    var cW = document.documentElement.clientWidth;
    var cH = document.documentElement.clientHeight;
    if (cW < 500) {
        document.querySelector('.btn').addEventListener('click', function () {
            document.querySelector('.question').style.display = 'block';
            document.querySelector('.question').style.width = '230px';
            document.querySelector('.answer').style.display = 'flex';
            document.querySelector('.answer').style.width = '230px';
            document.querySelector('.answer').style.opacity = '1';
            document.querySelector('.question').style.opacity = '1';
            document.querySelector('.answer').style.transition = 'opacity 0.5s ease-in';
            document.querySelector('.question').style.transition = 'opacity 0.2s ease-in';
        })
        document.querySelector('.btn-no').addEventListener('click', function () {
            document.querySelector('.btn-no').style.position = 'fixed';
            var random = Math.random();
            var top = random * cH;
            var left = random * cW;
            top > cH - 100 ? cH - 100 : top;
            left > cW - 100 ? cW - 100 : left;
            console.log('' + top + 'px' + ' ' + '' + left + 'px');
            document.querySelector('.btn-no').style.top = '' + top + 'px';
            document.querySelector('.btn-no').style.left = '' + left + 'px';
        })
        document.querySelector('.btn-yes').addEventListener('click', function () {
            document.querySelector('.btn').style.display = 'none';
            document.querySelector('.question').style.display = 'none';
            document.querySelector('.answer').style.display = 'none';
            document.querySelector('.thanks').style.display = 'block';
        })
    } else {
        document.querySelector('.btn').addEventListener('click', function () {
            document.querySelector('.left-container').style.paddingTop = '10%';
            document.querySelector('.left-container').style.transition = 'padding-top 0.5s'
            document.querySelector('.question').style.display = 'block';
            document.querySelector('.answer').style.display = 'block';
        })
        document.querySelector('.btn-no').addEventListener('mouseover', function () {
            document.querySelector('.btn-no').style.transition = 'opacity 0.2s ease-out';
            document.querySelector('.btn-no').style.opacity = '0';
        })
        document.querySelector('.btn-no').addEventListener('mouseout', function () {
            document.querySelector('.btn-no').style.transition = 'opacity 0.2s ease-in';
            document.querySelector('.btn-no').style.opacity = '1';
        })
        document.querySelector('.btn-yes').addEventListener('click', function () {
            document.querySelector('.btn').style.display = 'none';
            document.querySelector('.left-container').style.paddingTop = '5%';
            document.querySelector('.left-container').style.transition = 'padding-top 0.5s'
            document.querySelector('.question').style.display = 'none';
            document.querySelector('.answer').style.display = 'none';
            document.querySelector('.thanks').style.display = 'block';
        })
    }
});