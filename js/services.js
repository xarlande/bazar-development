const items = {
    seo: [
        {
            title: "Landing page",
            titleIcon: "image/services/card.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Business card",
            titleIcon: "image/services/bag.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Corporate website",
            titleIcon: "image/services/high-rise.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Landing page",
            titleIcon: "image/services/card.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Business card",
            titleIcon: "image/services/bag.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Corporate website",
            titleIcon: "image/services/high-rise.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        }
    ],
    development: [
        {
            title: "Landing page",
            titleIcon: "image/services/card.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Business card",
            titleIcon: "image/services/bag.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Corporate website",
            titleIcon: "image/services/high-rise.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        }
    ],
    marketing: [
        {
            title: "Landing page",
            titleIcon: "image/services/card.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Business card",
            titleIcon: "image/services/bag.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        },
        {
            title: "Corporate website",
            titleIcon: "image/services/high-rise.svg",
            budget: "$1000",
            timeSpent: "14 days",
            forWhom: "Small business, personal brand. personal",
            contentText:
                "You will get complete information about each we offer. offer. offer. offer. offer.",
            actionForButton: () => window.open('https://bazar.club', '_blank'),
        }
    ],
};


const buttons = document.querySelectorAll("#services .buttons-block button")
const swiperBody = document.querySelector("#swiper-services .swiper-wrapper");

const swiper = new Swiper("#swiper-services", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,
    breakpoints: {
        840: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

const servicesButtonNext = document.querySelector(".services-button-next");
const servicesButtonPrev = document.querySelector(".services-button-prev");

servicesButtonNext.addEventListener("click", () => {
    if (swiperBody.querySelectorAll('.swiper-slide').length) {
        swiper.slideNext()
    }
});
servicesButtonPrev.addEventListener("click", () => {
    if (swiperBody.querySelectorAll('.swiper-slide').length) {
        swiper.slidePrev()
    }
})

let currentServicesType = "seo";

const generateItemsForSwiper = () => {
    const container = document.createElement("div");

    items[currentServicesType].forEach((item) => {
        const content = `<div class="swiper-slide">
              <div class="block-card">
                <h3 class="title-block">
                  <img src="${item.titleIcon}" alt="icon" />
                  ${item.title}
                </h3>
                <div class="main-block">
                  <div class="item">
                    <img
                      src="image/services/ion_wallet-outline.svg"
                      alt="icon"
                    />
                    <span class="name">Budget:</span>
                    <span class="value">${item.budget}</span>
                  </div>
                  <div class="item">
                    <img src="image/services/ion_time-outline.svg" alt="icon" />
                    <span class="name">Time spent:</span>
                    <span class="value">${item.timeSpent}</span>
                  </div>
                  <div class="item">
                    <img
                      src="image/services/mdi_target-account.svg"
                      alt="icon"
                    />
                    <span class="name">For whom:</span>
                    <span class="value"
                      >${item.forWhom}</span
                    >
                  </div>
                </div>
                <div class="footer-block">
                  <p class="footer-text">
                    ${item.contentText}
                  </p>
                  <button class="button" onclick="(${item.actionForButton})()">
                    see more
                  </button>
                </div>
              </div>
            </div>`;

        container.innerHTML += content;
    });
    swiperBody.innerHTML = container.innerHTML;

    swiper.update()
};

buttons.forEach(element => {
    if (element.getAttribute('value') === 'seo') {
        element.classList.add('button-active')
    }

    element.addEventListener('click', event => {
        currentServicesType = event.target.getAttribute('value')
        buttons.forEach(item => item.classList.remove('button-active'))
        event.target.classList.add('button-active')
        generateItemsForSwiper();
    })
})

generateItemsForSwiper();
