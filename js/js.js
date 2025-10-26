const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;
let imgArray = [];

// 카드 클릭 시 모달 열기
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

// 키보드 화살표로 이미지 이동
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
    if (e.key === "Escape") {
      // ESC 키로 닫기
      modal.style.display = "none";
    }
  }
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 배경 클릭 시 닫기 (이미지 클릭은 제외)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});