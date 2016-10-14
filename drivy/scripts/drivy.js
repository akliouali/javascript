$(document).ready(function() {

  $("button#loadCars").click(function() {
    // on execute la requête au clic sur le bouton
    $.ajax({
      url:"cars.json",
      method: "GET",
      success: function(data) {
        // data = données envoyées par le serveur
        // boucle forEach pour parcourir
        // les élements du tableau reçu par le serveur

        data.forEach(function(e) {
          //$("body").text(e.name);
          var div = "<div id="+ e.id +" class='car'>" + e.name + "</div>";
          // append insère l'élément passée en entrée
          // dans le dom (à la fin de contenu courant)
          $("body").append(div); // prepend() pour insérer un première position
        }); // fin forEach()

        // insertion d'une balise img dans le dom
        $("body").prepend("<img id='carImage'>");

        $(".car").mouseover(function() {

          // la fonction position() renvoie un objet
          // contenant les propriétés top et left
          var pos = $(this).position();
          var top = pos.top; // on accède à la propriété top

          // récupérer l'identifiant de la voiture cliquée
          var id = $(this).attr("id");

          if ($("#cbDisplayImage input").prop("checked")) {
            // Afficher la photo du véhicule si la
            // checkedbox est cochée
            $("#carImage")
              .attr("src", "img/" + id + ".jpg") // chargement photo
              .css("top", top+8); // déplacement de la photo
          } // fin if

        });

        // Afficher la checkbox
        $("span#cbDisplayImage")
          .show()
          .children("input").click(function() {
            if (!$(this).prop("checked")) {
              // si la checkbox est décochée
              // on masque l'image
              $("#carImage").hide();
            } else {
              // sinon on affiche l'image
              $("#carImage").show();
            }

            // l'attribut html checked="checked"
            // n'existant plus, on ne peu plus y accéder
            // via attr(), on l'accède par la fonction prop()
          });



      },
      error: function() {
        console.log("Echec");
      }

    }); // fin ajax()

  }); // fin click()


  // Code incorrect, les div.car ne sont pas encore présentes
  // dans le document
  /*
  $(".car").click(function() {
    console.log("ok");
  });
  */


}); // fin ready()
