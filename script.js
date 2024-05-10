const toggleButton = document.querySelector(".toggle-btn");
const toggleCircle = document.querySelector(".toggle-circle");

const bodyElement = document.querySelector("body");
const headerElement = document.querySelector("header");
const followersSection = document.querySelector("#followers");
const overviewSection = document.querySelector("#overview");

toggleButton.addEventListener("click", () => {
	toggleCircle.classList.toggle("light");

	bodyElement.classList.toggle("light");
	headerElement.classList.toggle("light");
	followersSection.classList.toggle("light");
	overviewSection.classList.toggle("light");
});
