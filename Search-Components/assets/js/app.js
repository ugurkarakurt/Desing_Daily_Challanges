const toggle = document.querySelector(".toggle");
const i = toggle.querySelector("i");

let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}
if (localStorage.getItem('theme') === "dark") {
    i.classList.remove("fa-moon");
    i.classList.add("fa-sun");

} else if (localStorage.getItem('theme') === "light") {
    i.classList.add("fa-moon");
    i.classList.remove("fa-sun");

}

toggle.onclick = function () {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
        i.classList.remove("fa-moon");
        i.classList.add("fa-sun");
    } else {
        i.classList.add("fa-moon");
        i.classList.remove("fa-sun");
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
}