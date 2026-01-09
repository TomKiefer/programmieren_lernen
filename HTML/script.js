document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("tag-list");
  const items = Array.from(list.children);

  document.getElementById("sort-alpha").addEventListener("click", () => {
    const sorted = [...items].sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );
    list.innerHTML = "";
    list.append(...sorted);
  });

  document.getElementById("sort-priority").addEventListener("click", () => {
    const sorted = [...items].sort(
      (a, b) => a.dataset.priority - b.dataset.priority
    );
    list.innerHTML = "";
    list.append(...sorted);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
      mobileMenu.classList.add("hidden");
    });
  });
});