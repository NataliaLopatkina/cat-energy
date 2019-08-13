console.log("I'm Cat energy");

// Open/close menu

if (document.querySelectorAll(".header").length > 0) {
    function toogleMenu() {
        var nav = document.querySelector(".nav");
        var buttonMenu = document.querySelector(".button-menu");
        var navList = document.querySelector(".nav__list");

        buttonMenu.addEventListener("click", function () {
            var heightNav = navList.offsetHeight;

            if (nav.classList.contains("nav--opened")) {
                nav.classList.remove("nav--opened");
                nav.style.height = "0px";
                buttonMenu.classList.remove("button-menu--closed");
            }

            else {
                nav.classList.add("nav--opened");
                nav.style.height = heightNav + "px";
                buttonMenu.classList.add("button-menu--closed");
            }
        })
    }
    
    toogleMenu();

    window.addEventListener("resize", function() {
        toogleMenu();
    })
}
