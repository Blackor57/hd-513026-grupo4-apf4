function noticiaCreada(titulo, descripcion, imagen, fecha) {
    const carta = document.createElement("div");
    carta.className = "carta-Noticia";
    
    carta.innerHTML = `<img src="${imagen}" alt="Noticia" />
    <div class="contenido">
      <span class="fecha">${fecha}</span>
      <h2>${titulo}</h2>
      <p>${descripcion}</p>
    </div>
  `;

  return carta;

}

fetch('../noticias.json')
  .then(response => response.json())
  .then(noticias => {
    const contenedor = document.getElementById("contenedor-cartas");

    // Tarjeta principal
    const noticiaPrincipal = noticias[0];
    const cartaPrincipal = document.createElement("div");
    cartaPrincipal.className = "carta-principal";
    cartaPrincipal.innerHTML = `
      <img src="${noticiaPrincipal.imagen}" alt="${noticiaPrincipal.titulo}">
      <h2>${noticiaPrincipal.titulo}</h2>
      <p>${noticiaPrincipal.descripcion}</p>
      <span class="fecha">${noticiaPrincipal.fecha}</span>
    `;
    contenedor.appendChild(cartaPrincipal);

    // Tarjetas secundarias
    noticias.slice(1).forEach(noticia => {
      const cartaSecundaria = document.createElement("div");
      cartaSecundaria.className = "carta-secundaria";
      cartaSecundaria.innerHTML = `
        <img src="${noticia.imagen}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descripcion.substring(0, 100)}...</p>
        <span class="fecha">${noticia.fecha}</span>
      `;
      contenedor.appendChild(cartaSecundaria);
    });
  });
