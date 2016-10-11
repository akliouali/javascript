// définition de la function test()
function test() {
  console.log("ça marche !");
}

function test2(message) {
  console.log(message);
}

function cube(nb) {
  return nb * nb * nb;
}

function puissance(nb, puissance) {
  var result = 1;
  for(var i=0; i<puissance; i++) {
    result = result * nb;
  }
  return result;
}

function isNegative(nb) {
  if (nb < 0) {
    return true;
  } else {
    return false;
  }
}

test(); // appel de la function

for (var i = 0; i < 5; i++) {
  // appel de la function dans une boucle
  test();
}

test2("Bonjour à tous !");

console.log(addition(50,30));
console.log(addition(80,20));

var resultat = addition(70,70);
console.log(multiplication(7,3));
console.log(cube(5));
console.log(puissance(5,4));
console.log(puissance(2.5,2));
console.log(isNegative(8)); // false
console.log(isNegative(-8)); // true
console.log(isSquare(14,14,14,19)); // false
console.log(isSquare(14,14,14,14)); // true

var calcul = addition(cube(2), cube(3)); // (2*2*2 = 8) + (3*3*3=27) => 35
console.log(calcul);

calcul = addition(
  multiplication(cube(2),4),
  multiplication(cube(3),5)
);
console.log(calcul); //167

console.log(simpleMath.addition(4,6));
console.log(simpleMath.multiplication(4,6));

console.log(geometry.isSquare(5,5,5,5));

biblioRo.afficheMessage();
biblioIt.afficheMessage();
