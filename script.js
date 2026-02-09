const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.textContent.trim();
    alert(`${label} clicked! Our travel experts will reach out soon.`);
  });
});

const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.querySelector(".carousel-control.prev");
const nextButton = document.querySelector(".carousel-control.next");
let activeIndex = 0;

const setActiveSlide = (index) => {
  carouselItems.forEach((item) => item.classList.remove("active"));
  carouselItems[index].classList.add("active");
};

if (carouselItems.length) {
  setActiveSlide(activeIndex);
}

const moveSlide = (direction) => {
  activeIndex = (activeIndex + direction + carouselItems.length) % carouselItems.length;
  setActiveSlide(activeIndex);
};

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => moveSlide(-1));
  nextButton.addEventListener("click", () => moveSlide(1));
}
