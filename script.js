const toggleButton = document.querySelector(".toggle-btn");
const toggleCircle = document.querySelector(".toggle-circle");

const bodyElement = document.querySelector("body");
const headerElement = document.querySelector("header");
const followersSection = document.querySelector("#followers");
const overviewSection = document.querySelector("#overview");

toggleLight = [toggleCircle, bodyElement, headerElement, followersSection, overviewSection];

toggleButton.addEventListener("click", () => {
	toggleLight.forEach((item) => {
		item.classList.toggle("light");
	});
});
