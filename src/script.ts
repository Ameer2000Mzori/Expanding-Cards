// getting our elements
const panels = document.querySelectorAll(".panel");

panels.forEach((panel: Element) => {
  // our event listeners
  panel.addEventListener("click", () => {
    // removing class from other panels
    removeActiveClasses();
    // adding class to our main panel
    panel.classList.add("active");
  });
});

// remove function
function removeActiveClasses(): void {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
