(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
//   document.body.classList.toggle("no-scroll");
  }
})();


const form = document.querySelector(".form");

const orderModal = document.querySelector("[data-modal]");
const successModal = document.querySelector("[data-modal-success]");
const closeSuccess = document.querySelector("[data-close-success]");


form.addEventListener("submit", function (e) {
  e.preventDefault();


  orderModal.classList.add("is-hidden");


  successModal.classList.remove("is-hidden");
});


closeSuccess.addEventListener("click", () => {
  successModal.classList.add("is-hidden");
  document.body.style.overflow = "";
});


successModal.addEventListener("click", (e) => {
  if (e.target === successModal) {
    successModal.classList.add("is-hidden");
    document.body.style.overflow = "";
  }
});