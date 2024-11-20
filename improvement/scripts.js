// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
  
    let seconds = 0;
  
    setInterval(() => {
      seconds++;
      const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const secs = String(seconds % 60).padStart(2, "0");
      timerElement.textContent = `${hours}:${minutes}:${secs}`;
    }, 1000);
  });
  