window.addEventListener("scroll", checkScroll);

var threshold = 300;

function checkScroll() {

    if (window.innerWidth > 768) {
        var top = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var navBar = document.getElementById("main-nav");

        if (top > threshold && navBar.className !== "condensed") {
            navBar.className += "condensed";
        } else if (top <= threshold && navBar.className !== "") {
            navBar.className = "";
        }
    }
}

function openClose() {
    var navBar = document.getElementById("top-nav");

    if(navBar.className === "") {
        navBar.className += "open";
    } else {
        navBar.className = "";
    }
}

window.addEventListener("load", function() {
    var currentURL = window.location.href;

    var links = document.querySelectorAll("#top-nav li");

    for(var l of links) {
        var lHref = l.firstChild.href;
        if(lHref !== currentURL) {
            l.classList = "";
        } else {
            l.classList = "active";
        }
    }

});