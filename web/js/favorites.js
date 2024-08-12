// Función para cargar y mostrar los elementos favoritos en la página
function loadFavorites() {
  const favContainer = document.getElementById("fav-container");
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const deleteIconTemplate = document.getElementById("delete-icon-template").content;

  favContainer.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos favoritos

  favorites.forEach((src) => {
    const favItem = document.createElement("div");
    favItem.classList.add("fav-item");

    const favImg = document.createElement("img");
    favImg.setAttribute("src", src);
    favImg.setAttribute("alt", "Favorito");

    // Clona el ícono de eliminar del template
    const deleteIcon = document.importNode(deleteIconTemplate, true);
    deleteIcon.querySelector(".delete-icon").onclick = () => removeFavorite(src);

    favItem.appendChild(favImg);
    favItem.appendChild(deleteIcon);
    favContainer.appendChild(favItem);
  });

  updateCheckboxes(favorites); // Actualiza los checkboxes en la página de ropa
}

// Función para vaciar todos los favoritos
function clearFavorites() {
  localStorage.removeItem('favorites');
  const favContainer = document.getElementById("fav-container");
  while (favContainer.firstChild) {
    favContainer.removeChild(favContainer.firstChild);
  }
  updateCheckboxes([]); // Actualiza los checkboxes en la página de ropa
}

// Función para eliminar un favorito específico
function removeFavorite(imageSrc) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(src => src !== imageSrc);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  const favItem = document.querySelector(`#fav-container .fav-item img[src="${imageSrc}"]`).parentNode;
  if (favItem) {
    favItem.parentNode.removeChild(favItem);
  }

  updateCheckboxes(favorites); // Actualiza los checkboxes en la página de ropa
}

// Función para actualizar los checkboxes en la página de ropa
function updateCheckboxes(favorites) {
  const checkboxes = document.querySelectorAll(`.favorite-switch input[type="checkbox"]`);
  checkboxes.forEach((checkbox) => {
    const img = checkbox.closest(".image-container").querySelector("img");
    if (img) {
      const src = img.getAttribute("src");
      checkbox.checked = favorites.includes(src);
    }
  });
}

// Carga los favoritos cuando se carga la página
document.addEventListener('DOMContentLoaded', loadFavorites);
