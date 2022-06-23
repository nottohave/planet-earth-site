const planetInfosBody = document.querySelectorAll(".planet-infos-body p");
const tab = document.querySelectorAll('[role="tab"]');

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

    // when user click, obtain aria controls, select the id of the aria controls
    // remove hidden attribute on p and source with selected id name
    const planet_info = targetClick.getAttribute("aria-controls");
    const showPlanetInfo = document.querySelectorAll([`#${planet_info}`]);

    for (i = 0; i< showPlanetInfo.length; i++) {
        showPlanetInfo[i].removeAttribute("hidden");
    }

    // unhighlight all buttons
    for (i = 0; i < tab.length; i++) {
        tab[i].setAttribute("aria-selected", false);
    }

}

