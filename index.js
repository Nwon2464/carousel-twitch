const carousel = document.querySelector(".carousel");
const cellCount = 8;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = (selectedIndex / cellCount) * -360;
  console.log(angle, selectedIndex, cellCount);
  carousel.style.transform = "translateZ(-905px) rotateY(" + angle + "deg)";
}
const prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});
