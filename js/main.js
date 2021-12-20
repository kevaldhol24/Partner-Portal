let navbar = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("navbar_scrolled")
    } else {
        navbar.classList.remove("navbar_scrolled")

    }
}