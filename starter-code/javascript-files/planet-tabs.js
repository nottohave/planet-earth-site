const planetInfosBody = document.querySelectorAll(".planet-infos-body p");
const tab = document.querySelectorAll('[role="tab"]');
const planet_img = document.querySelectorAll('.planet-img img');
const surface = document.querySelector('.surface-img');
const overview = document.querySelector('.overview-img');

// create click function for all button with role tab
tab.forEach(function(tab) {
    tab.addEventListener('click', clickOnTab);
}); 

// select the button 
function clickOnTab(click) {
    const targetClick = click.target;
    
    for (i = 0; i < planetInfosBody.length; i++) {
        planetInfosBody[i].setAttribute("hidden", "true");
    }    

    for (i = 0; i < planet_img.length; i++) {
        planet_img[i].setAttribute("hidden", "true");
    }


    // when user click, obtain aria controls, select the id of the aria controls
    // remove hidden attribute on p and source with selected id name
    const planet_info = targetClick.getAttribute("aria-controls");
    const showPlanetInfo = document.querySelectorAll([`#${planet_info}`]);

    for (i = 0; i< showPlanetInfo.length; i++) {
        showPlanetInfo[i].removeAttribute("hidden");
    }

    // if the user select surface, remove hidden attribute for overview and surface
    if (planet_info === 'surface') {
        surface.removeAttribute("hidden");
        overview.removeAttribute("hidden");
    }    
    

    // unhighlight all buttons
    for (i = 0; i < tab.length; i++) {
        tab[i].setAttribute("aria-selected", false);
    }


}

