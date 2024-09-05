document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll("#mySidebar .list-group-item");
    const sections = document.querySelectorAll("div[id]");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function() {
            sidebarLinks.forEach(link => link.classList.remove("text-teal"));
            this.classList.add("text-teal");

            const targetSection = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
