function toggleMiniPage() {
    var miniPage = document.getElementById("miniPage");
    miniPage.classList.toggle("open");
    event.preventDefault();
}

function closeMiniPage() {
    var miniPage = document.getElementById("miniPage");
    miniPage.classList.remove("open");
    event.preventDefault();
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("nbar").style.fontSize = "1.5vw";
        document.getElementById("figurebar").style.fontSize = "1.5vw";
        document.getElementById("cakebar").style.fontSize = "1.5vw";
    } else {
        document.getElementById("nbar").style.fontSize = "2vw";
        document.getElementById("figurebar").style.fontSize = "2vw";
        document.getElementById("cakebar").style.fontSize = "2vw";
    }
}

function scrollToSection(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        var yOffset = -100; // Adjust the y-axis position as needed
        var y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // prevents it from jumping to the top when clicked
    event.preventDefault();
}