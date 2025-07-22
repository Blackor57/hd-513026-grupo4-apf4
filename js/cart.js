const tarjetas = [
    {
        imagen: "https://wallpapercave.com/wp/wp14769882.jpg",
        titulo: "Explora el Mundo Jurásico",
        descripcion: "Vive una aventura única entre dinosaurios reales en nuestro parque temático. ¡No te lo pierdas!",
        actualizado: "Descubre más ->"
    },
    {
        imagen: "https://i.redd.it/p1w9dt7oplsd1.jpeg",
        titulo: "Dinosaurios Marinos",
        descripcion: "Sumérgete en el océano prehistórico y conoce a los reptiles más grandes que jamás existieron.",
        actualizado: "Descubre más ->"
    },
    {
        imagen: "https://s0.smartresize.com/wallpaper/447/873/HD-wallpaper-logo-movie-jurassic-park-jurassic-world-jurassic-world-dominion.jpg",
        titulo: "Entrada Jurassic Gold",
        descripcion: "Ahorra un 30% en tu pase especial y accede a zonas exclusivas, espectáculos y encuentros cercanos.",
        actualizado: "Descubre más ->"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('cards-container');

    tarjetas.forEach(tarjeta => {
        // Wrapper de la tarjeta, equivalente a col-md-4
        const col = document.createElement('div');
        col.className = 'custom-col';

        // Card principal
        const card = document.createElement('div');
        card.className = 'card';
        card.style.height = '300px';  // Mantener altura fija

        // Fila horizontal (flex)
        const row = document.createElement('div');
        row.className = 'custom-row-horizontal';

        // Contenedor imagen (1/3)
        const colImg = document.createElement('div');
        colImg.className = 'custom-col-img';

        const img = document.createElement('img');
        img.src = tarjeta.imagen;
        img.className = 'custom-img';
        img.alt = tarjeta.titulo;

        colImg.appendChild(img);

        // Contenedor contenido (2/3)
        const colContent = document.createElement('div');
        colContent.className = 'custom-col-content';

        const cardBody = document.createElement('div');
        cardBody.className = 'custom-card-body';

        const titulo = document.createElement('h5');
        titulo.className = 'card-title';
        titulo.textContent = tarjeta.titulo;

        const descripcion = document.createElement('p');
        descripcion.className = 'card-text';
        descripcion.textContent = tarjeta.descripcion;

        const lastUpdated = document.createElement('p');
        lastUpdated.className = 'card-text last-updated';
        lastUpdated.innerHTML = `<small>${tarjeta.actualizado}</small>`;

        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(lastUpdated);

        colContent.appendChild(cardBody);

        row.appendChild(colImg);
        row.appendChild(colContent);

        card.appendChild(row);
        col.appendChild(card);
        contenedor.appendChild(col);
    });
});
