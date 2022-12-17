import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

const gallery = document.querySelector(".gallery");
const listGallery = galleryItems.map(
  ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"      
    />
  </a>
</div>`
);

gallery.innerHTML = listGallery.join(" ");

gallery.addEventListener("click", onTagClick);
function onTagClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  const largeImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${largeImg}" width="800" height="600">
  `);

  instance.show();

  // Реалізація закриитя модалки по ESC через "once"

  document.addEventListener(
    "keydown",
    (evt) => {
      if (evt.code === "Escape" && instance.visible()) {
        instance.close();
        console.log(1);
      }
    },

    { once: true }
  );
  // Реалізація закриитя модалки по ESC через "логічний оператор &&"

  // document.addEventListener("keydown", (evt) => {
  //   if (evt.code === "Escape" && instance.visible()) {
  //     instance.close();
  //   } else {
  //     document.removeEventListener("keydown", evt);
  //   }
  // });
}
