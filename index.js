const rightArrow = document.querySelector(".arrow.right");
const leftArrow = document.querySelector(".arrow.left");

const radioButtons = document.querySelectorAll("input");

function displayImage(index) {
  const images = document.querySelectorAll(".image");

  images.forEach((item) => {
    if (item.dataset.index === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

radioButtons.forEach((item) => {
  const { id } = item;
  item.addEventListener("click", () => {
    displayImage(id);
  });
});

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
  const radios = document.querySelectorAll("input");

  const radio = [...radios].filter((item) => item.id === index);
  radio[0].checked = true;
}

function nextSlide() {
  nextImage();
  updateRadioButton();
}

function previousSlide() {
  previousImage();
  updateRadioButton();
}

rightArrow.addEventListener("click", () => {
  nextSlide();
});

leftArrow.addEventListener("click", () => {
  previousSlide();
});

setInterval(nextSlide, 5000);
