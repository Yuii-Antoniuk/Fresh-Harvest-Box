const backdrop = document.querySelector("[data-modal]");

function toggleModal() {
  backdrop.classList.toggle("is-hidden");

  if (!backdrop.classList.contains("is-hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  updateScrollLock(); 
}

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

backdrop.addEventListener("click", event => {
  if (event.target === backdrop) {
    toggleModal();
  }
});
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) toggleModal();
});
