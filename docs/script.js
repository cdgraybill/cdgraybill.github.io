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

function changeSkin(id) {
  switch (id) {
    case "ares":
      document.documentElement.style.setProperty("--nav-selected", "#b83228");
      document.documentElement.style.setProperty("--bg", "#0d0d0b");
      document.documentElement.style.setProperty("--text-primary", "#ddddd5");
      break;
    case "volt":
      document.documentElement.style.setProperty("--nav-selected", "#00E320");
      document.documentElement.style.setProperty("--bg", "#9E9E9E");
      document.documentElement.style.setProperty("--text-primary", "#0d0d0b");
      break;
    default:
  }
}
