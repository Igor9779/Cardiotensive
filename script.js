const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const closeBtn = document.querySelector(".close-burger-btn");
const backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", () => {
  navList.classList.add("active");
  backdrop.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("active");
  backdrop.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  navList.classList.remove("active");
  backdrop.classList.remove("active");
});

const modal = document.getElementById("contact-modal");
const openModalBtn = document.getElementById("contact-btn");
const closeModalBtn = document.getElementById("modal-close-btn");
const modalContent = document.querySelector(".modal-content");

// Функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
}

// Открытие модального окна по кнопке
openModalBtn.addEventListener("click", openModal);

// Закрытие модального окна по кнопке закрытия
closeModalBtn.addEventListener("click", closeModal);

// Закрытие модального окна по клику на бекдроп
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Закрытие модального окна по клавише Esc
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Перенаправление на стр СПАСИБО
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    window.location.href = "thanks.html"; // Перенаправляем на страницу "Спасибо"
  });
