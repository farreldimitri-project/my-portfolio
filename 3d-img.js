const image = document.querySelector(".image-effect img");

image.addEventListener("mousemove", (e) => {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

image.addEventListener("mouseleave", () => {
  image.style.transform = "rotateX(0) rotateY(0)";
});
