const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav ul");
if (btn && menu) {
  btn.addEventListener("click", () => menu.classList.toggle("open"));
}
const page = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav ul a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
});
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Projects page filter
const filterBtns = document.querySelectorAll(".filter");
if (filterBtns.length) {
  filterBtns.forEach((b) =>
    b.addEventListener("click", () => {
      filterBtns.forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      const f = b.dataset.filter;
      document.querySelectorAll(".case").forEach((c) =>
        c.classList.toggle("hidden", f !== "all" && c.dataset.cat !== f)
      );
    })
  );
}
