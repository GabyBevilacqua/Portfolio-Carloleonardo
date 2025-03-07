document.addEventListener('DOMContentLoaded', function() {
    const artworkImages = document.querySelectorAll('.artwork-image');
    const readMoreBtn = document.getElementById('read-more-btn');
    const textContainer = document.querySelector('.text-container');

    artworkImages.forEach(image => {
        image.addEventListener('click', function() {
            const artworkId = this.dataset.id;
            window.location.href = `src/pages/obra.html?id=${artworkId}`;
        });
    });
    
    readMoreBtn.addEventListener('click', function() {
        textContainer.classList.toggle('expanded');
        if (textContainer.classList.contains('expanded')) {
            readMoreBtn.textContent = 'Leer menos';
        } else {
            readMoreBtn.textContent = 'Leer más';
        }
    });

});