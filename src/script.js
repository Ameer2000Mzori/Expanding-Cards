// getting our elements
var imgWrapper = document.getElementsByClassName("img-Wrapper")[0];
var panels = document.querySelectorAll(".panel");
panels.forEach(function (panel) {
    panel.addEventListener("click", function () {
        removeActiveClasses();
        panel.classList.add("active");
    });
});
// our functions
function removeActiveClasses() {
    panels.forEach(function (panel) {
        panel.classList.remove("active");
    });
}
// our event lisnters
