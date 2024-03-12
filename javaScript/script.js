const openModal = () => {
  document.getElementById("modal").classList.add("active");
};

const closeModal = () => {
  document.getElementById("modal").classList.remove("active");
};

document
  .getElementById("new-event")
  .addEventListener("click", () => openModal());

document
  .querySelector(".modal-close")
  .addEventListener("click", () => closeModal());
