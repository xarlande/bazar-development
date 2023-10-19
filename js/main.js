particlesJS.load("particles-js", "assets/particles.json");
particlesJS.load("particles-js-duplicate", "assets/particles.json");

const buttonToBazar = document.querySelector("#button-bazar");

buttonToBazar.addEventListener("click", () => {
  window.open("https://www.bazar.club", "_blank");
});

const buttonToScrollEnd = document.querySelector("#button-scroll-to-end");

if (buttonToScrollEnd) {
  const firstSection = document.querySelector("section");

  buttonToScrollEnd.addEventListener("click", () => {
    firstSection.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

const stageSteps = document.querySelectorAll(
  "#stage-of-cooperation .container .content .item .content-block",
);

let margin = 0;
stageSteps.forEach((item) => {
  item.style.marginTop = `${margin}px`;
  margin += 60;
});

const faqList = document.querySelectorAll("#faq .faq-list .faq-item");

faqList.forEach((element) => {
  element.addEventListener("click", (event) => {
    const target = event.target;
    const button = target.closest(".button-rounded");

    if (button) {
      const faqItem = target.closest(".faq-item");

      faqList.forEach((faqItemElement) => {
        if (faqItemElement !== element) {
          faqItemElement
            .querySelector(".button-rounded")
            .classList.remove("button-active");

          faqItemElement.classList.remove("faq-item-active");
        }
      });
      button.classList.toggle("button-active");

      if (button.classList.contains("button-active")) {
        faqItem.classList.add("faq-item-active");
      } else {
        faqItem.classList.remove("faq-item-active");
      }
    }
  });
});

const selectForOrderTheService = document.querySelector(
  "#select-for-order-the-service",
);
const selectDropdown = selectForOrderTheService.querySelector(".dropdown-body");
const dropdownItems = selectDropdown.querySelectorAll(".dropdown-item");

selectForOrderTheService.addEventListener("click", (event) => {
  event.stopPropagation();
  selectForOrderTheService.classList.toggle("select-open");
});
selectDropdown.addEventListener("click", (event) => {
  event.stopPropagation();
});
dropdownItems.forEach((component) => {
  component.addEventListener("click", () => {
    selectForOrderTheService.classList.remove("select-open");
  });
});

const chevrons = document.querySelectorAll("#work-with-us .chevrons img");

let prevChevrons = 0;
let currentChevrons = 0;

setInterval(() => {
  const chevronsLength = chevrons.length;
  prevChevrons = currentChevrons;
  if (chevronsLength > currentChevrons + 1) {
    currentChevrons += 1;
  } else {
    currentChevrons = 0;
  }
  chevrons[prevChevrons].src =
    "image/workWithUs/ion_chevron-forward-outline(gray).svg";
  chevrons[currentChevrons].src =
    "image/workWithUs/ion_chevron-forward-outline(white).svg";
}, 200);

const buttonToForm = document.querySelectorAll(".button-to-form");
const form = document.querySelector("#order-the-service .modal");

buttonToForm.forEach((element) => {
  element.addEventListener("click", () => {
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
