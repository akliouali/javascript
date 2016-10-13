$(document).ready(function() {
  // votre code jquery ici
  var imagesVisible = true;
  var btnText = "";

  // ajoute une bordure orange à tous les éléments
  // de la classe 'client'
  $(".client").css("border", "4px orange solid");

  // modification de plusieurs propriétés css
  $("#title").css({
    color: "red",
    textDecoration: "underline",
    margin: "10px"
  });

  $("#btnHideImages").click(function() {
    imagesVisible = !imagesVisible;
    $(".client").toggle(); // masque ou affiche

    console.log("images visible: " + imagesVisible);
    if (imagesVisible) {
      $(this).text("Masquer images");
    } else {
      $(this).text("Afficher images");
    }


    /*
    if (imagesVisible) {
      btnText = "Afficher";
    } else {
      btnText = "Masquer";
    }
    */

    // opérateur ternaire : permet une concision d'écriture
    // des traitements conditionnels (if) à une instruction.
    // (expression booléenne) ? instruction si vrai : instruction si faux
    //btnText = (imagesVisible) ? "Afficher" : "Masquer";
    //$(this).text(btnText + " images");

  });

  $(".client").click(function() {
    $('.client').css("width", "100px");
    $(this).css("width", "200px");
  });

  // Sommaire escamotable
  $("#toc span").click(function() {
    //$("#toc ol").toggle(500);
    //$(this).parent().children("ol").toggle(500);
    $(this).next().toggle(500); // meilleure pratique
    // .prev() =>cible l'élément précédent de même niveau
  });

  // titres et articles
  $("#articles h2").click(function() {
    // affiche/masque l'élément suivant la balise h2 ayant
    // reçu le clic
    $(this).next().toggle();
  });

}); // fin ready()
