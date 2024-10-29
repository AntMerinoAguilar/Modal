const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector("#openModal");
const btnXCloseModal = document.querySelector(".modal__close");
const btnBottomCloseModal = document.querySelector(".modal__footer__button");

//---On peut utiliser des .addEventListener() à la place de .onclick
btnOpenModal.onclick = function() {
    overlay.style.display = "block";
    modal.style.display = "block";
}

btnXCloseModal.onclick = function() {
    overlay.style.display = "none";
    modal.style.display = "none";
}

btnBottomCloseModal.onclick = function() {
    overlay.style.display = "none";
    modal.style.display = "none";
}

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.display = "none";
        modal.style.display = "none";
    }
})