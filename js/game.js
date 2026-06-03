let currentSceneId = null;

const sceneBg = document.getElementById("sceneBg");
const characterImg = document.getElementById("characterImg");
const characterName = document.getElementById("characterName");
const dialogText = document.getElementById("dialogText");
const choicesBox = document.getElementById("choicesBox");
const nextBtn = document.getElementById("nextBtn");

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");


let musicEnabled = false;

if (bgMusic) {
  bgMusic.volume = 0.8;
}

if (musicToggle && bgMusic) {
  musicToggle.textContent = "🔇";

  musicToggle.addEventListener("click", () => {
    musicEnabled = !musicEnabled;

    if (musicEnabled) {
      bgMusic.play()
        .then(() => {
          musicToggle.textContent = "🔊";
        })
        .catch(error => {
          console.warn("Браузер заблокував запуск музики:", error);

          musicEnabled = false;
          musicToggle.textContent = "🔇";
        });
    } else {
      bgMusic.pause();
      musicToggle.textContent = "🔇";
    }
  });
}

const scenes = [
  ...commonScenes,
  ...finalGoodPathScenes,
  ...finalBadPathScenes
];

const scenesMap = Object.fromEntries(
  scenes.map(scene => [scene.id, scene])
);

function getScene(sceneId) {
  return scenesMap[sceneId] || null;
}

function showScene(sceneId) {
  const scene = getScene(sceneId);

  if (!scene) {
    console.error("Сцену не знайдено:", sceneId);
    return;
  }

  currentSceneId = sceneId;
  localStorage.setItem("currentScene", sceneId);

  sceneBg.style.backgroundImage = `url("${scene.background}")`;

  if (scene.character) {
    characterImg.src = scene.character;
    characterImg.style.display = "block";
  } else {
    characterImg.removeAttribute("src");
    characterImg.style.display = "none";
  }

  characterName.textContent = scene.name || "";
  dialogText.textContent = scene.text || "";

  renderChoices(scene);
}

function renderChoices(scene) {
  choicesBox.innerHTML = "";
  nextBtn.onclick = null;

  if (scene.choices && scene.choices.length > 0) {
    nextBtn.style.display = "none";

    scene.choices.forEach(choice => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.textContent = choice.text;

      button.addEventListener("click", () => {
        if (choice.set) {
          Object.keys(choice.set).forEach(key => {
            localStorage.setItem(key, choice.set[key]);
          });
        }

        showScene(choice.next);
      });

      choicesBox.appendChild(button);
    });

    return;
  }

  if (scene.nextCondition) {
    nextBtn.style.display = "block";

    nextBtn.onclick = () => {
      const value = localStorage.getItem(scene.nextCondition.key);

      if (value === scene.nextCondition.equals) {
        showScene(scene.nextCondition.success);
      } else {
        showScene(scene.nextCondition.fail);
      }
    };

    return;
  }

  if (scene.next) {
    nextBtn.style.display = "block";
    nextBtn.onclick = () => showScene(scene.next);
  } else {
    nextBtn.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedScene = localStorage.getItem("currentScene");

  if (savedScene && getScene(savedScene)) {
    showScene(savedScene);
  } else {
    showScene("scene_road_1");
  }
});