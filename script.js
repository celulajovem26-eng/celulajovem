// Fade-in ao carregar
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        setTimeout(() => {
            el.classList.add("show");
        }, 200);
    });
});

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
