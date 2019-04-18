var vitesse = 2; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).height);
var animationId = null; // Identifiant de l'animation
//******bloc******//
// l'animation des bloc
function deplacerBloc() {
    // Conversion en nombre de la position du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).top);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).height);
    if (xBloc <= xBloc) { // si chaque bloc bouge par rapport à l'autre bloc alors
        // Déplacement du bloc
        bloc.style.top = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    }

    else  {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }

}

animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation

//*******bloc1*******//

var largeurBloc = parseFloat(getComputedStyle(bloc1).height);
function deplacerBloc1() {
  var vitesse = 1.5;
    var xBloc = parseFloat(getComputedStyle(bloc1).top);
    var xMax = parseFloat(getComputedStyle(cadre).height);
    if (xBloc <= xBloc) {
        bloc1.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc1);

    } else  {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }

}

animationId = requestAnimationFrame(deplacerBloc1); // Début de l'animation

//******bloc2******//

var largeurBloc = parseFloat(getComputedStyle(bloc2).height);
function deplacerBloc2() {
  var vitesse = 2;
    var xBloc = parseFloat(getComputedStyle(bloc2).top);
    var xMax = parseFloat(getComputedStyle(cadre).height);
    if (xBloc <= xBloc) {
        bloc2.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc2);

    } else  {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }

}

animationId = requestAnimationFrame(deplacerBloc2); // Début de l'animation

//*******bloc3*******//

var largeurBloc = parseFloat(getComputedStyle(bloc3).height);
function deplacerBloc3() {
  var vitesse = 1.5;
    var xBloc = parseFloat(getComputedStyle(bloc3).top);
    var xMax = parseFloat(getComputedStyle(cadre).height);
    if (xBloc <= xBloc) {
        bloc3.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc3);

    } else  {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }

}

animationId = requestAnimationFrame(deplacerBloc3); // Début de l'animation

//******bloc4*********//

var largeurBloc = parseFloat(getComputedStyle(bloc4).height);
function deplacerBloc4() {
  var vitesse = 2;
    var xBloc = parseFloat(getComputedStyle(bloc4).top);
    var xMax = parseFloat(getComputedStyle(cadre).height);
    if (xBloc <= xBloc) {
        bloc4.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc4);

    } else  {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }

}

animationId = requestAnimationFrame(deplacerBloc4); // Début de l'animation

//*********bloc5*******//

var largeurBloc = parseFloat(getComputedStyle(bloc5).height);
function deplacerBloc5() {
  var vitesse = 3;
    var xBloc = parseFloat(getComputedStyle(bloc5).top);
    var xMax = parseFloat(getComputedStyle(cadre).height);
    if (xBloc <= xBloc) {
        bloc5.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc5);

    } else  {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }

}

animationId = requestAnimationFrame(deplacerBloc5); // Début de l'animation
