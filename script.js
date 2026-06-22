// Fade-in ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
const fadeElements = document.querySelectorAll(".fade-in");

```
fadeElements.forEach((element, index) => {
    setTimeout(() => {
        element.classList.add("show");
    }, index * 150);
});
```

});

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");

if (topBtn) {
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

```
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
```

}
