document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typing-text");
  const texts = ["Shinigami & Mantan Kapten Gotei 13", "Mantan Kapten Espada"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeLoop, 500); // jeda sebelum mulai teks baru
        return;
      }
    } else {
      element.textContent = currentText.substring(0, charIndex++);
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1500); // jeda sebelum hapus
        return;
      }
    }
    setTimeout(typeLoop, isDeleting ? 80 : 100); // kecepatan ketik/hapus
  }

  typeLoop();
});
