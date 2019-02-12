// Code Page Accueil //

// Je crée une var vid afin de mettre la vidéo de fond au ralenti
var vid = document.getElementById("main-video");
vid.playbackRate = 0.5;


//Je crée une fonction qui empêche deux classes de fonctionner sur la nav jusqu'à l'utilisation du scroll down (function en dessous)
/*function navOut () {
    var navPosition = document.getElementById("nav-position");
    var headerTop = document.getElementById("header-top");*/
    /*navPosition.removeClass("nav-position");
    headerTop.removeClass("nav-position-support");*/
   /* navPosition.classList.remove("nav-position");
    headerTop.classList.remove("nav-position-support");
};

window.onload = navOut();*/


// Je crée une var afin de sélectionner les éléments qui suivont le scroll dans ma nav
$(function() {
    //caches a jQuery object containing the header element
    var navPosition = $(".nav-position");
    var headerTop = $(".header-top");
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 98) {
            navPosition.addClass("nav-position");
            headerTop.addClass("nav-position-support");
        } else {
            navPosition.removeClass("nav-position");
            headerTop.removeClass("nav-position-support");
        }
    });
});