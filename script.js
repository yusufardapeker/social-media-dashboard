const toggleButton = document.querySelector(".toggle-btn");
const body = document.body;

body.dataset.theme = localStorage.getItem("theme");
const toSetTheme = body.dataset.theme === "light" ? "dark" : "light";

const handleToggle = () => {
	body.dataset.theme = toSetTheme;
	localStorage.setItem("theme", toSetTheme);
};

toggleButton.addEventListener("click", handleToggle);
