//******bloc******//

// l'animation des blocs

function deplacerBloc() {
    // Conversion en nombre de la position du bloc (valeur de la forme "XXpx")
    var vitesse = 2; // calculer en pixel //
    var xBloc = parseFloat(getComputedStyle(bloc).top);
    if (xBloc <= xBloc) { // si chaque bloc bouge par rapport à l'autre bloc alors
        // Déplacement du bloc
        bloc.style.top = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    }
}
animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation

//*******bloc1*******//

function deplacerBloc1() {
  var vitesse = 1.5;
    var xBloc = parseFloat(getComputedStyle(bloc1).top);
    if (xBloc <= xBloc) {
        bloc1.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc1);
    }
}
animationId = requestAnimationFrame(deplacerBloc1); // Début de l'animation

//******bloc2******//

function deplacerBloc2() {
  var vitesse = 2;
    var xBloc = parseFloat(getComputedStyle(bloc2).top);
    if (xBloc <= xBloc) {
        bloc2.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc2);
    }
}
animationId = requestAnimationFrame(deplacerBloc2); // Début de l'animation

//*******bloc3*******//

function deplacerBloc3() {
  var vitesse = 1.5;
    var xBloc = parseFloat(getComputedStyle(bloc3).top);
    if (xBloc <= xBloc) {
        bloc3.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc3);
    }
}
animationId = requestAnimationFrame(deplacerBloc3); // Début de l'animation

//******bloc4*********//

function deplacerBloc4() {
  var vitesse = 2;
    var xBloc = parseFloat(getComputedStyle(bloc4).top);
    if (xBloc <= xBloc) {
        bloc4.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc4);

    }
}
animationId = requestAnimationFrame(deplacerBloc4); // Début de l'animation

//*********bloc5*******//

function deplacerBloc5() {
  var vitesse = 3;
    var xBloc = parseFloat(getComputedStyle(bloc5).top);
    if (xBloc <= xBloc) {
        bloc5.style.top = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc5);
    }
}
animationId = requestAnimationFrame(deplacerBloc5); // Début de l'animation
