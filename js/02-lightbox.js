import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const listGallery = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__item" class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      
      alt="${description}"      
    />
  </a>
</li>`
);
gallery.innerHTML = listGallery.join(" ");
console.log(gallery);
