document.addEventListener('DOMContentLoaded', function () {
    //constante para la carga de las imagenes al pinchar en la obra
    const artworkImages = document.querySelectorAll('.artwork-image');
    //constante para el boton de leer mas
    const readMoreBtn = document.getElementById('read-more-btn');
    const textContainer = document.querySelector('.text-container');

    const marqueeContent = document.querySelector(".marquee-content");
    const spans = marqueeContent.querySelectorAll("span");

    //funcion para la carga de las imagenes al pinchar en la obra
    artworkImages.forEach(image => {
        image.addEventListener('click', function () {
            const artworkId = this.dataset.id;
            window.location.href = `src/pages/obra.html?id=${artworkId}`;
        });
    });
    //funcion para contenedor de texto
    readMoreBtn.addEventListener('click', function () {
        textContainer.classList.toggle('expanded');
        if (textContainer.classList.contains('expanded')) {
            readMoreBtn.textContent = 'Leer menos';
        } else {
            readMoreBtn.textContent = 'Leer más';
        }
    });

    //funcion para el marquee
    let totalWidth = 0;
    spans.forEach((span) => {
        totalWidth += span.offsetWidth + parseInt(window.getComputedStyle(span).marginRight);
    });

    marqueeContent.innerHTML += marqueeContent.innerHTML;

    const speed = 100; // Ajustar este valor para cambiar la velocidad
    const duration = totalWidth / speed;

    marqueeContent.style.animationDuration = `${duration}s`;

    // Función para el scroll suave
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Función de easing (suavizado)
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    // Event listeners para los enlaces de ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const target = this.getAttribute('href');
            smoothScroll(target, 1000); // Duración de 1000ms (1 segundo)
        });
    });

});

//listtener para que el navbar cambie de color al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});