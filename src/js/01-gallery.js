//? Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
//? Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const containerPhotoGallery = document.querySelector('.gallery');

function addColections() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
     <a class="gallery__item"
      href="${original}">
            <img
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            title='${description}'
            />
        </a>`;
    })
    .join('');
}

containerPhotoGallery.insertAdjacentHTML('beforeend', addColections());

let lightbox = new SimpleLightbox('.gallery a', {
  className: '.sl-caption.pos-bottom',
  captionDelay: 250,
});
