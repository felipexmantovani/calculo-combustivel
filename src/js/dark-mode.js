const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

function checkTheme() { 
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

checkTheme();

btn.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});

btn2.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }
});
