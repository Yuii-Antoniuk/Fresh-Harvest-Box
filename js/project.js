const openBtn = document.querySelector("[data-open-modal]");
const closeBtn = document.querySelector("[data-close-modal]");
const backdrop = document.querySelector("[data-modal]");

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  updateScrollLock(); // ✅ ДОДАЙ ОЦЕ
}

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) toggleModal();
});