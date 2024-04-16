document.addEventListener("DOMContentLoaded", function() {
    const collapseButton = document.getElementById("collapseButton");
    const responsiveIcon = document.getElementById("responsiveIcon");
    const leftMenu = document.querySelector(".left-menu");

    // Toggle collapsed class on left menu when collapse button is clicked
    collapseButton.addEventListener("click", function() {
        leftMenu.classList.toggle("collapsed");
        collapseButton.classList.toggle("collapsed"); // Toggle collapsed class on the button itself
    });

    // Toggle collapsed class on left menu when responsive icon is clicked
    responsiveIcon.addEventListener("click", function() {
        leftMenu.classList.toggle("collapsed");
        responsiveIcon.classList.toggle("collapsed"); // Toggle collapsed class on the button itself
    });
});
