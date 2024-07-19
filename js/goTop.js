let goTopoBtn = document.getElementById("goTopBtn");

window.onscroll = function () {
    scrollFuntion();
}
function scrollFuntion() {
    if (document.documentElement.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        goTopoBtn.style.display = "Flex";

    } else {
        goTopoBtn.style.display = "none";
    }
    document.querySelector("goTopBtn")
        .addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })

}
