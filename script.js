const musicButton = document.querySelector("[data-music]");
const audio = document.querySelector("#birthday-audio");

if (musicButton && audio) {
  musicButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        musicButton.innerHTML = "♫ <span>Playing</span>";
      } catch {
        musicButton.innerHTML = "♫ <span>Tap to play</span>";
      }
    } else {
      audio.pause();
      musicButton.innerHTML = "♫ <span>Music</span>";
    }
  });
}

const wishButton = document.querySelector("#wish-button");

if (wishButton) {
  wishButton.addEventListener("click", () => {
    document.querySelectorAll(".candles span").forEach((candle) => {
      candle.textContent = "💨";
    });

    document.querySelector("#wish-message").textContent =
      "Wish sent into the universe! ✨";

    const colors = ["#fff", "#ffd166", "#ff78ad", "#d8a7ff", "#ffc2d7"];

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("i");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = `${Math.random() * 0.7}s`;
      confetti.style.animationDuration = `${2 + Math.random() * 2}s`;

      document.body.appendChild(confetti);
      confetti.addEventListener("animationend", () => confetti.remove());
    }
  });
}