const mediaQuery = window.matchMedia("(max-width: 600px)");

window.onload = function () {
    const nav = document.querySelector(".nav") as HTMLElement;

    mediaQuery.addEventListener("change", () => {
        if (mediaQuery.matches) {
            nav.classList.add("no-show");
        } else {
            nav.classList.remove("no-show");
        }
    });
    const burger = document.querySelector(".burger") as HTMLElement;
    burger.addEventListener("click", () => {
        nav.classList.toggle("no-show");
    });
};
