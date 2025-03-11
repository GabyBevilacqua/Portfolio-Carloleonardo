document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const artworkId = urlParams.get('id');

    fetch('../data/artworks.json')
        .then(response => response.json())
        .then(data => {
            const obra = data.obras.find(o => o.id === artworkId);
            if (obra) {
                document.getElementById('titulo-obra').textContent = obra.titulo;
                document.getElementById('descripcion-obra').textContent = obra.descripcion;
                document.getElementById('tecnica-obra').textContent = obra.tecnica;
                document.getElementById('dimensiones-obra').textContent = obra.dimensiones;
                document.getElementById('precio-obra').textContent = obra.precio;

                const imagenesContainer = document.getElementById('imagenes-obra');
                obra.imagenes.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.className = 'img-fluid m-2 imgObra fade-in';
                    imagenesContainer.appendChild(img);
                });
            }
        })
        .catch(error => console.error('Error al cargar los datos de la obra:', error));
});