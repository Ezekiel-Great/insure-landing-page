
document.querySelector(".mobile-menu").addEventListener("click", () => {
  const navbar = document.querySelector("nav .menu"),
    closeBtn = document.querySelector(".close"),
    openBtn = document.querySelector(".open");

  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
  } else {
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  }
});