particlesJS.load("particles-js", "assets/particles.json");

const buttonToBazar = document.querySelector("#button-bazar");

buttonToBazar.addEventListener("click", () => {
  window.open("https://www.bazar.club", "_blank");
});

const buttonToScrollEnd = document.querySelector("#button-scroll-to-end");

buttonToScrollEnd.addEventListener("click", () => {
  document.documentElement.scrollIntoView({ behavior: "smooth", block: "end" });
});

const stageSteps = document.querySelectorAll(
  "#stage-of-cooperation .container .content .item .content-block",
);

let margin = 0;
stageSteps.forEach((item) => {
  console.log(item);
  item.style.marginTop = `${margin}px`;
  margin += 60;
});

const faqList = document.querySelectorAll("#faq .faq-list .faq-item button");

faqList.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("button-active");
  });
});
