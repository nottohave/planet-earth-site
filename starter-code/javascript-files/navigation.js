var primNav = document.querySelector(".primary-navigation");
var primMob = document.querySelector(".mobile-nav-toggle");
var planetBody = document.querySelector(".planet-body");

// open and close navigation
primMob.addEventListener("click", function() {
    var dataVisible = primNav.getAttribute("data-visible");

    // open the navigation upon clicked
    if (dataVisible !== "true") {
        primNav.setAttribute("data-visible", true);
        primMob.setAttribute("aria-expanded", true);
    } else {
        primNav.setAttribute("data-visible", false);
        primMob.setAttribute("aria-expanded", false);

    }
})
