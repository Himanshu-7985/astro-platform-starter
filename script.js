// Simple effect on thumbnails
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    alert(`You clicked on: ${img.alt}`);
  });
});