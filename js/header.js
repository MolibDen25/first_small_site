// js/header.js

document.addEventListener("DOMContentLoaded", async () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
  
    // Завантажуємо HTML шапки
    const res = await fetch("components/header.html");
    const html = await res.text();
    headerPlaceholder.innerHTML = html;
  
    // Додаємо кнопки входу або профілю
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const container = document.getElementById("auth-buttons");
  
    if (!container) return;
  
    if (isLoggedIn) {
      const name = localStorage.getItem("userName") || "Користувач";
      container.innerHTML = `
        <a href="../pages/profile.html" class="d-flex align-items-center text-decoration-none text-dark">
          <img src="../assets/avatars/default.jpg" alt="avatar" class="rounded-circle me-2" width="32" height="32">
          <span>${name}</span>
        </a>
      `;
    } else {
      container.innerHTML = `
        <a href="../pages/login.html" class="btn btn-outline-primary me-2">Вхід</a>
        <a href="../pages/register.html" class="btn btn-primary">Реєстрація</a>
      `;
    }
  });
  