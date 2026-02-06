document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const questionBox = document.getElementById("questionBox");
    const answerBox = document.getElementById("answerBox");
    const buttonsArea = document.getElementById("buttonsArea");
  
    // 📱 Phone vibration helper
    function vibratePhone(pattern = [40]) {
      if ("vibrate" in navigator) {
        navigator.vibrate(pattern);
      }
    }
  
    // YES button ❤️
    yesBtn.addEventListener("click", () => {
      vibratePhone([60]);
      questionBox.classList.add("hidden");
      answerBox.classList.remove("hidden");
    });
  
    // NO button movement 😈
    function moveNoNearby() {
      const areaRect = buttonsArea.getBoundingClientRect();
      const btnRect = noBtn.getBoundingClientRect();
  
      const padding = 8;
      const maxX = areaRect.width - btnRect.width - padding;
      const maxY = areaRect.height - btnRect.height - padding;
  
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
  
      noBtn.style.left = `${Math.round(newX)}px`;
      noBtn.style.top = `${Math.round(newY)}px`;
    }
  
    ["mouseover", "focus", "click", "touchstart"].forEach(evt => {
      noBtn.addEventListener(evt, e => {
        e.preventDefault();
  
        if (evt === "click" || evt === "touchstart") {
          vibratePhone([30, 20, 30]);
        }
  
        moveNoNearby();
      });
    });
  });
  