const overview = document.querySelector("#overview");
const structure = document.querySelector("#structure");
const surface = document.querySelector("#surface");
const planetInfosBody = document.querySelectorAll(".planet-infos-body p");
const tab = document.querySelectorAll('[role="tab"]');

for (i = 0; i < planetInfosBody.length; i++) {
    planetInfosBody[i].setAttribute("hidden", "true");
}

// create click function for all button with role tab
tab.forEach(function(tab) {
    tab.addEventListener('click', clickOnTab)
}); 

// select the button 
function clickOnTab(click) {
    const targetClick = click.target;
    
    console.log(targetClick.className);

    // unhighlight all buttons
    for (i = 0; i < tab.length; i++) {
        tab[i].setAttribute("aria-selected", false);
    }

}

