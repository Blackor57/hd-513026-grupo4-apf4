fetch('dinos.json')
  .then(response => response.json())
  .then(dinos => {
    const cardsContainer = document.getElementById('cardsContainer');
    const modalsContainer = document.getElementById('modalsContainer');

    dinos.forEach(dino => {
      // Crear tarjeta
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${dino.image}" alt="${dino.name}">
        <p>${dino.name}</p>
      `;
      card.addEventListener('click', () => openModal(dino.id));
      cardsContainer.appendChild(card);

      // Crear modal
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.id = `modal-${dino.id}`;
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="closeModal('${dino.id}')">&times;</span>
          <img src="${dino.image}" alt="${dino.name}">
          <h2>${dino.name}</h2>
          <p>${dino.description}</p>
        </div>
      `;
      modalsContainer.appendChild(modal);
    });
  });

function openModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'none';
}