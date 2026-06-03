const newGameBtn = document.getElementById("newGameBtn");
const continueBtn = document.getElementById("continueBtn");
const settingsBtn = document.getElementById("settingsBtn");

const settingsModal = document.getElementById("settingsModal");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");

newGameBtn.addEventListener("click", () => {
  localStorage.removeItem("currentScene");

  window.location.href = "game.html";
});

continueBtn.addEventListener("click", () => {
  const savedScene = localStorage.getItem("currentScene");

  if (savedScene) {
    window.location.href = "game.html";
  } else {
    alert("Збереження ще немає. Почніть нову гру.");
  }
});

settingsBtn.addEventListener("click", () => {
  settingsModal.classList.add("active");
});

closeSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.remove("active");
});

settingsModal.addEventListener("click", (event) => {
  if (event.target === settingsModal) {
    settingsModal.classList.remove("active");
  }
});