particlesJS.load("particles-js", "assets/particles.json");

const buttonToBazar = document.querySelector("#button-bazar");

buttonToBazar.addEventListener("click", () => {
  window.open("https://www.bazar.club", "_blank");
});
