// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Largeur de défilement d’un item
if (carousel) {
    const premierItem = document.querySelector(".carousel__item");
    const defaultScroll = premierItem.clientWidth;


  // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
  });

  // (Optionel) Обновляем scrollAmount при ресайзе
    window.addEventListener('resize', () => {
    const first = document.querySelector(".carousel__item");
    scrollAmount = first ? first.clientWidth : scrollAmount;
  });
}






