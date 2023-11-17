// getting our elements
var panels = document.querySelectorAll(".panel");
panels.forEach(function (panel) {
    // our event listeners
    panel.addEventListener("click", function () {
        // removing class from other panels
        removeActiveClasses();
        // adding class to our main panel
        panel.classList.add("active");
    });
});
// remove function
function removeActiveClasses() {
    panels.forEach(function (panel) {
        panel.classList.remove("active");
    });
}
