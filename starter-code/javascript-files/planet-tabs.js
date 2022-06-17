// set active state for aria selected first
// click > select the button > highlight the button > unhighlight other buttons
// hide the contents that are not selected
// show the contents that are selected

const tab = document.querySelectorAll('[role="tab"]');


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

