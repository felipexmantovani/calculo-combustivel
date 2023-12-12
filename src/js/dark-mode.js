const BTN_DARK = document.getElementById("btn");
const BTN_LIGHT = document.getElementById("btn2");
const THEME_KEY = "theme";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function setThemeDark() {
	document.body.classList.remove(THEME_LIGHT);
	document.body.classList.add(THEME_DARK);
	localStorage.setItem(THEME_KEY, THEME_DARK);
}

function setThemeLight() {
	document.body.classList.remove(THEME_DARK);
	document.body.classList.add(THEME_LIGHT);
	localStorage.setItem(THEME_KEY, THEME_LIGHT);
}

function checkTheme() {
	const LOCALSTORAGE_THEME = localStorage.getItem(THEME_KEY);
	if (LOCALSTORAGE_THEME) {
		LOCALSTORAGE_THEME === THEME_LIGHT ? setThemeLight() : setThemeDark();
	} else {
		window.matchMedia("(prefers-color-scheme: dark)").matches ? setThemeDark() : setThemeLight();
	}
}

checkTheme();

BTN_DARK.addEventListener("change", (e) => {
	e.target.checked ? setThemeDark() : setThemeLight();
});

BTN_LIGHT.addEventListener("change", (e) => {
	e.target.checked ? setThemeLight() : setThemeDark();
});
