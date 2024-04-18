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

function getCurrentImageIndex() {
  const currentImgIndex = document.querySelector(".image.active").dataset.index;
  return currentImgIndex;
}

function updateRadioButton() {
  const index = getCurrentImageIndex();
  console.log(index);
  const radios = document.querySelectorAll("input");

  const radio = [...radios].filter((item) => item.id === index);
  radio[0].checked = true;
}

rightArrow.addEventListener("click", () => {
  nextImage();
  updateRadioButton();
});

leftArrow.addEventListener("click", () => {
  previousImage();
  updateRadioButton();
});
