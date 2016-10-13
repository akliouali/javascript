$(document).ready(function() {

  var text = "";
  var MAXCHARS = 20; // constante de paramètrage
  var remainingChars = MAXCHARS; // variable indiquant
  // le nombre de caractères restants

  $("#evaluation")
    .val("") // j'efface les éventuels caractères (tabulation) déjà présent dans le textarea
    .keydown(function(key) {
      console.log(key.keyCode); // on affiche le code numérique
      // correspondant à la touche enfoncée
      text = $(this).val(); // on récupère la valeur du textarea

      remainingChars = MAXCHARS - (text.length+1); // calcul du nb de chars restants
      $("#nbChars").text("Vous reste: " + remainingChars + " caractères");
      // text étant une varialbe de type 'string'
      // on peut utiliser dessus les fonctions JS de traitement
      // de chaînes (ex: .toUpperCase)

      // on bloque la saisie lorsque la maximum de caractères autorisés
      // est atteint
      if (remainingChars === 0 && key.keyCode !== 8) {

        $("#nbChars").css("color", "red");

        // On bloque à deux conditions:
        // 1/ que le nombre de caractères restants soit égal à 0
        // 2/ qu'on n'ait pas appuyé sur la touche backspace (keyCode 8)
        return false; // bloque la saisie
      } else {
        // petit problème avec le 0
        $("#nbChars").css("color", "black");
      }
  });

  $("img.client")
    .mouseenter(function() {
      // ajout de la classe lorsque la souris "entre" dans l'image
      $(this).addClass("test");
      $(this).next().show();
    })
    .mouseleave(function() {
      // retrait de la classe lorsque la souris quitte l'image
      $(this).removeClass("test");
      $(this).next().hide();
    });

  var image = null;
  $("#selectImage select").change(function() {
    // modifier la source de l'image
    // en fonction de l'option sélectionnée
    image =  "img/" + $(this).val();
    $(this).next().attr("src", image);
  });

}); // fin ready()
