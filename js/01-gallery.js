import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryEL = galleryItems
  .map(
    ({ preview, original, description }) => `
  
 <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>   
 
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryEL);
console.log(galleryItems);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code === "Escape") {
      instance.close();
    }
  });
});
