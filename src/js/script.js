document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las imágenes de las obras
    const artworkImages = document.querySelectorAll('.artwork-image');

    // Añade un evento de clic a cada imagen
    artworkImages.forEach(image => {
        image.addEventListener('click', function() {
            // Obtén el ID de la obra desde un atributo de datos
            const artworkId = this.dataset.artworkId;
            // Redirige a la página de la obra correspondiente
            window.location.href = `pages/artworks/${artworkId}.html`;
        });
    });
});
