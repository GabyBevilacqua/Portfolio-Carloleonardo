document.addEventListener('DOMContentLoaded', function() {
    const artworkImages = document.querySelectorAll('.artwork-image');

    artworkImages.forEach(image => {
        image.addEventListener('click', function() {
            const artworkId = this.dataset.id;
            window.location.href = `src/pages/obra.html?id=${artworkId}`;
        });
    });
});