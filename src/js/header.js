
// js de header

// hamburguesa

const burger = document.querySelector('.burger');
const dropdown = document.querySelector('.dropdown-menu');

if (burger && dropdown) {
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });
  document.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });
}

// popup de asignaturas fav

const showFavoritesBtn = document.getElementById('show-favorites');
const favoritesPopup = document.getElementById('favorites-popup');
const closePopupBtn = document.querySelector('.close-popup');
const saveButton = document.querySelector('.save-button');

if (saveButton) {
  saveButton.addEventListener('click', () => {
    favoritesPopup.classList.remove('show');
  });
}

if (showFavoritesBtn && favoritesPopup && closePopupBtn) {
  showFavoritesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdown) dropdown.classList.remove('show');
    favoritesPopup.classList.add('show');
  });

  closePopupBtn.addEventListener('click', () => {
    favoritesPopup.classList.remove('show');
  });
}

// estrellas

const favoritesList = document.querySelectorAll('.favorites-list li');
favoritesList.forEach(item => {
  item.addEventListener('click', function() {
    const star = this.querySelector('.custom-star');
    if (star) {
      star.classList.toggle('custom-star-empty');
      star.classList.toggle('custom-star-filled');
      if (star.classList.contains('custom-star-empty')) {
        star.innerHTML = '<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>';
      } else {
        star.innerHTML = '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>';
      }
    }
  });
});
