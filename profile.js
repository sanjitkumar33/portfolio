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
// for canvas use only
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

// for canvas1 use only
var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();