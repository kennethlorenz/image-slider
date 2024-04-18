const rightArrow = document.querySelector(".arrow.right");
const leftArrow = document.querySelector(".arrow.left");
function nextImage() {
  const lastImg = document.querySelector(".images").lastElementChild;
  const currentImg = document.querySelector(".image.active");
  let nextImg = currentImg.nextElementSibling;

  function toggleImages() {
    currentImg.classList.remove("active");
    nextImg.classList.add("active");
  }

  if (currentImg === lastImg) {
    nextImg = document.querySelector(".images").firstElementChild;
    toggleImages();
  }
  toggleImages();
}

function previousImage() {
  const firstImg = document.querySelector(".images").firstElementChild;
  const currentImg = document.querySelector(".image.active");
  let prevImg = currentImg.previousElementSibling;

  function toggleImages() {
    currentImg.classList.remove("active");
    prevImg.classList.add("active");
  }

  if (currentImg === firstImg) {
    prevImg = document.querySelector(".images").lastElementChild;
    toggleImages();
  }
  toggleImages();
}

rightArrow.addEventListener("click", () => {
  nextImage();
});

leftArrow.addEventListener("click", () => {
  previousImage();
});
