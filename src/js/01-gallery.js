// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) =>{
        return `
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        title="${description}"/>
        </a>`
    })
    .join("");
}

new SimpleLightbox(".gallery a", {captionDelay: 250,});

console.log(galleryItems);
