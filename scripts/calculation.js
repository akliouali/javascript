
function addition(nb1, nb2) {
  return nb1 + nb2;
}

function multiplication(nb1, nb2) {
  return nb1 * nb2;
}


var isSquare = function (nb1, nb2, nb3, nb4) {
  var square = true; // on présuppose qu'il s'agit d'un carré
  var sides = [nb2, nb3, nb4]; // on stoque les arguments
  // dans un tableau afin de pouvoir le parcourir (via une boucle)

  // on boucle à partir deuxième élément du tableau (premier déjà connu)
  for (var i=0; i<sides.length; i++) {
    if (sides[i] != nb1) {
      // comparaison systématique avec la premier côté
      // si l'on trouve une inégalité
      // on renvoie immédiatement la valeur false
      // => ce n'est pas un carré
      square = false;
      return square;
    }

  }
  return square;
};

var simpleMath = {
  addition: function(nb1, nb2) {
    return nb1 + nb2;
  },
  multiplication: function(nb1, nb2) {
    return nb1 * nb2;
  }
};

// l'object geometry contient les fonctions utiles
// pour des calculs en géométrie (isSquare, isRectangle, etc..)
var geometry = {
  isSquare: isSquare
};

var biblioIt = {
  afficheMessage: function() {console.log("Buon giorno");}
};
var biblioRo = {
  afficheMessage: function() {console.log("Buna ziua");}
};
