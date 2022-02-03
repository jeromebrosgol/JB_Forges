
/*----------------start calculpoids---------------*/
function calculpoids() {
  let diamExt = document.getElementById('diamExt-1').value;
  let diamInt = document.getElementById('diamInt-1').value;
  let long = document.getElementById('long-cyl-1').value;
  let dens = document.getElementById('dens-1').value;
  let poids = document.getElementById('poids-1');

  poids.value = Math.round(((((diamExt * diamExt) - (diamInt * diamInt)) * long * dens * Math.PI
    * Math.pow(10, -6))) / 4) + " kg"
}
let calculPoids = document.getElementById('calcul-1');
calculPoids.addEventListener("click", calculpoids);
/*--------------------end calculpoids--------------------*/


/*------------------start init poids----------------*/
function initPoids() {

  let diamExt = document.getElementById('diamExt-1');
  let diamInt = document.getElementById('diamInt-1');
  let long = document.getElementById('long-cyl-1');
  let dens = document.getElementById('dens-1');
  let poids = document.getElementById('poids-1');

  diamExt.value = "";
  diamInt.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let empty = document.getElementById('reset-1');
empty.addEventListener("click", initPoids);
/*----------------------end init poids-----------*/

/*---------------start calcul diamExt-----------------*/
function diametreExt() {
  let diamExt2 = document.getElementById('diamExt-2');
  let diamInt2 = document.getElementById('diamInt-2').value;
  let long2 = document.getElementById('long-cyl-2').value;
  let dens2 = document.getElementById('dens-2').value;
  let poids2 = document.getElementById('poids-2').value;

  diamExt2.value = Math.round(Math.sqrt(((poids2*4)/(long2 * dens2 * Math.PI * Math.pow(10, -6)) 
  + (diamInt2 * diamInt2))))

}
let calculDiamExt = document.getElementById('calcul-2');
calculDiamExt.addEventListener("click", diametreExt);
/*---------------end calcul diamExt----------------*/

/*-------------------start init diamExt----------------*/

function initDiamExt() {

  let diamExt = document.getElementById('diamExt-2');
  let diamInt = document.getElementById('diamInt-2');
  let long = document.getElementById('long-cyl-2');
  let dens = document.getElementById('dens-2');
  let poids = document.getElementById('poids-2');

  diamExt.value = "";
  diamInt.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let empty1 = document.getElementById('reset-2');
empty1.addEventListener("click", initDiamExt);
/*---------------------end init poids-------------*/

/*-------------------start calcul diamInt-------------*/
function diametreInt() {
  let diamExt3 = document.getElementById('diamExt-3').value;
  let diamInt3 = document.getElementById('diamInt-3');
  let long3 = document.getElementById('long-cyl-3').value;
  let dens3 = document.getElementById('dens-3').value;
  let poids3 = document.getElementById('poids-3').value;

  diamInt3.value = Math.round(Math.sqrt((diamExt3 * diamExt3)-((poids3*4)/
  (long3 * dens3 * Math.PI * Math.pow(10, -6)))))

}
let calculDiamInt = document.getElementById('calcul-3');
calculDiamInt.addEventListener("click", diametreInt);
/*------------------end calcul diamInt---------------------*/

/*------------------start init diamInt--------------------*/

function initDiamInt() {

  let diamExt = document.getElementById('diamExt-3');
  let diamInt = document.getElementById('diamInt-3');
  let long = document.getElementById('long-cyl-3');
  let dens = document.getElementById('dens-3');
  let poids = document.getElementById('poids-3');

  diamExt.value = "";
  diamInt.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let empty3 = document.getElementById('reset-3');
empty3.addEventListener("click", initDiamInt);
/*--------------------end init diamInt------------------*/


 /*-------------------start calcul hauteur-------------*/
function hauteur() {
  let diamExt4 = document.getElementById('diamExt-4').value;
  let diamInt4 = document.getElementById('diamInt-4').value;
  let long4 = document.getElementById('long-cyl-4');
  let dens4 = document.getElementById('dens-4').value;
  let poids4 = document.getElementById('poids-4').value;

  long4.value = Math.round((poids4*4)/(((diamExt4*diamExt4)-(diamInt4*diamInt4)) 
  * Math.PI * dens4 * Math.pow(10, -6)))

}
let calculHauteur = document.getElementById('calcul-4');
calculHauteur.addEventListener("click", hauteur);
/*------------------end calcul hauteur---------------------*/

/*------------------start init hauteur--------------------*/

function initHauteur() {

  let diamExt = document.getElementById('diamExt-4');
  let diamInt = document.getElementById('diamInt-4');
  let long = document.getElementById('long-cyl-4');
  let dens = document.getElementById('dens-4');
  let poids = document.getElementById('poids-4');

  diamExt.value = "";
  diamInt.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let empty4 = document.getElementById('reset-4');
empty4.addEventListener("click",initHauteur);
/*--------------------end init hauteur------------------*/

/*--------------------------------------------------------*/
/*--------------------------------------------------------*/

/*----------------start calculpoids plateau---------------*/
function calculpoidsPlateau() {
  let haut = document.getElementById('hautPlat-1').value;
  let larg = document.getElementById('largPlat-1').value;
  let long = document.getElementById('longPlat-1').value;
  let dens = document.getElementById('densPlat-1').value;
  let poids = document.getElementById('poidsPlat-1');

  poids.value = Math.round(haut * larg * long * dens * Math.pow(10, -6)) + " KG"
}
let calculPoidsPlateau = document.getElementById('calculPlat-1');
calculPoidsPlateau.addEventListener("click", calculpoidsPlateau);
/*--------------------end calculpoids plateau--------------------*/

/*------------------start init poids----------------*/
function initPoidsPlateau() {

  let haut = document.getElementById('hautPlat-1');
  let larg = document.getElementById('largPlat-1');
  let long = document.getElementById('longPlat-1');
  let dens = document.getElementById('densPlat-1');
  let poids = document.getElementById('poidsPlat-1');

  haut.value = "";
  larg.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let resetPoidsPlateau = document.getElementById('resetPlat-1');
resetPoidsPlateau.addEventListener("click", initPoidsPlateau);
/*----------------------end init poids-----------*/


/*----------------start longueur plateau---------------*/
function calculLongPlateau() {
  let haut = document.getElementById('hautPlat-2').value;
  let larg = document.getElementById('largPlat-2').value;
  let long = document.getElementById('longPlat-2');
  let dens = document.getElementById('densPlat-2').value;
  let poids = document.getElementById('poidsPlat-2').value;

  long.value = Math.round(poids / (haut * larg * dens * Math.pow(10, -6)))
}
let calculLongueurPlateau = document.getElementById('calculPlat-2');
calculLongueurPlateau.addEventListener("click", calculLongPlateau);
/*--------------------end longueur plateau--------------------

/*------------------start init longueur----------------*/
function initLongPlateau() {

  let haut = document.getElementById('hautPlat-2');
  let larg = document.getElementById('largPlat-2');
  let long = document.getElementById('longPlat-2');
  let dens = document.getElementById('densPlat-2');
  let poids = document.getElementById('poidsPlat-2');

  haut.value = "";
  larg.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let resetLongPlateau = document.getElementById('resetPlat-2');
resetLongPlateau.addEventListener("click", initLongPlateau);
/*----------------------end init longueur----------- */

/*----------------start largeur plateau---------------*/
function calculLargPlateau() {
  let haut = document.getElementById('hautPlat-3').value;
  let larg = document.getElementById('largPlat-3');
  let long = document.getElementById('longPlat-3').value;
  let dens = document.getElementById('densPlat-3').value;
  let poids = document.getElementById('poidsPlat-3').value;

  larg.value = Math.round(poids / (haut * long * dens * Math.pow(10, -6)))
}
let calculLargeurPlateau = document.getElementById('calculPlat-3');
calculLargeurPlateau.addEventListener("click", calculLargPlateau);
/*--------------------end largeur plateau--------------------

/*------------------start init largeur----------------*/
function initLargPlateau() {

  let haut = document.getElementById('hautPlat-3');
  let larg = document.getElementById('largPlat-3');
  let long = document.getElementById('longPlat-3');
  let dens = document.getElementById('densPlat-3');
  let poids = document.getElementById('poidsPlat-3');

  haut.value = "";
  larg.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let resetLargPlateau = document.getElementById('resetPlat-3');
resetLargPlateau.addEventListener("click", initLargPlateau);
/*----------------------end init largeur----------- */

/*----------------start hauteur plateau---------------*/
function calculHautPlateau() {
  let haut = document.getElementById('hautPlat-4');
  let larg = document.getElementById('largPlat-4').value;
  let long = document.getElementById('longPlat-4').value;
  let dens = document.getElementById('densPlat-4').value;
  let poids = document.getElementById('poidsPlat-4').value;

  haut.value = Math.round(poids / (larg * long * dens * Math.pow(10, -6)))
}
let calculHauteurPlateau = document.getElementById('calculPlat-4');
calculHauteurPlateau.addEventListener("click", calculHautPlateau);
/*--------------------end hauteur plateau--------------------

/*------------------start init hauteur----------------*/
function initHautPlateau() {

  let haut = document.getElementById('hautPlat-4');
  let larg = document.getElementById('largPlat-4');
  let long = document.getElementById('longPlat-4');
  let dens = document.getElementById('densPlat-4');
  let poids = document.getElementById('poidsPlat-4');

  haut.value = "";
  larg.value = "";
  long.value = "";
  dens.value = "";
  poids.value = "";
}
let resetHautPlateau = document.getElementById('resetPlat-4');
resetHautPlateau.addEventListener("click", initHautPlateau);
/*----------------------end init hauteur----------- */