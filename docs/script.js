function showSection(id, event) {
  if (event) event.preventDefault();
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.getElementById("nav-" + id).classList.add("active");
}
