const openBtn = document.querySelector("[data-open-modal]");
const closeBtn = document.querySelector("[data-close-modal]");
const backdrop = document.querySelector("[data-modal]");

function toggleModal() {
  backdrop.classList.toggle("is-hidden");

  if (!backdrop.classList.contains("is-hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

backdrop.addEventListener("click", event => {
  if (event.target === backdrop) {
    toggleModal();
  }
});
