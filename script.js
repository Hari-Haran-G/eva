const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");

let tries = 0;

noBtn.addEventListener("mouseover", () => {
  tries++;

  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (tries > 6) {
    noBtn.innerText = "OKAY YES 😭❤️";
    noBtn.onclick = () => yesBtn.click();
  }
});

yesBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
