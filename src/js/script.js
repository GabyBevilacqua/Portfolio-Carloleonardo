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

    const speed = 100; // Ajusta este valor para cambiar la velocidad
    const duration = totalWidth / speed;

    marqueeContent.style.animationDuration = `${duration}s`;

});