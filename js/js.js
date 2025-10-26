const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;
let imgArray = [];

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const imgs = card.dataset.images;
    if (imgs) {
      imgArray = imgs.split(",").map(i => i.trim());
      currentIndex = 0;
      modalImg.src = imgArray[currentIndex];
      modal.style.display = "block";
    }
  });
});

document.addEventListener("keydown", e => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % imgArray.length;
      modalImg.src = imgArray[currentIndex];
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
      modalImg.src = imgArray[currentIndex];
    }
  }
});
