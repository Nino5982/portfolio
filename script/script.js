const seeMore = document.querySelector("button");
const hiddenParagraf = document.querySelector(".card_desc-hidden");

seeMore.addEventListener("click", () => {
  hiddenParagraf.classList.toggle("show-desc");
  const isShown = hiddenParagraf.classList.contains("show-desc");
  seeMore.textContent = isShown ? "...ნაკლები" : "...იხილეთ მეტი";
});
