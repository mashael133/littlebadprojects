 document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for the whole page
    document.body.classList.add("fade-in");

    // Expand and collapse content
    const expandButtons = document.querySelectorAll(".expand-button");
    expandButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                button.textContent = "Expand";
            } else {
                content.style.display = "block";
                button.textContent = "Collapse";
            }
        });
    });
});

