import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item js-current">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source = "${original}"
        alt="${description}"
      />
    </a>
  </li>  `).join('');
}
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerGalleryItemClick);
function handlerGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const source = evt.target.dataset.source;
  const modal = basicLightbox.create(`
      <img src="${source}" alt="" />
    `);
  modal.show();

  window.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      modal.close();
    }
  });
}

console.log(galleryItems);
