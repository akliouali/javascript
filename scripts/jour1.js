var couleurs = ["orange", "jaune", "vert", "cerise"];
console.log(couleurs[0]);

// base de données
var clients = [
  {name:"Victor Hugo", age:63, active:true},
  {name:"Hermann Hesse", age:56, active:true},
  {name:"Italo Calvino", age:45, active:false},
  {name:"Alberto Moravia", age:17, active:true},
  {name:"Sylvain Tesson", age:43, active:false}
];

// boucle affichant les couleurs
for(var i=0; i<couleurs.length; i++) {
  //console.log(couleurs[i]);
  if (couleurs[i] == "jaune") {
    console.log("J'aime le jaune");
  }
}

// deux ifs imbriqués
if(couleurs.length > 3) {
  console.log("Il y a plus de 3 couleurs dans le tableau");
} else {
  if (couleurs.length == 3) {
    console.log("Il y a exactement 3 couleurs dans le tableau");
  } else {
    console.log("Il y a moins de 3 couleurs dans le tableau");
  }
}

// if...else if...else
if(couleurs.length > 3)  {
  console.log("Il y a plus de 3 couleurs dans le tableau");
} else if(couleurs.length == 3) {
  console.log("Il y a exactement 3 couleurs dans le tableau");
} else {
  console.log("Il y a moins de 3 couleurs dans le tableau");
}

// Affichage du nombre de clients inactifs
var nbClientsInactifs = 0;
for(var i=0; i<clients.length; i++) {
  //if(clients[i].active == false) {
  if(!clients[i].active) { // if not clients[i].active
    nbClientsInactifs++ // on incrémente la variable nbClientsInactifs
  }
}
console.log("Nombre de clients inactifs: " + nbClientsInactifs);


// Affichage de la moyenne d'âge des clients
var cumulAges = 0;
var moyenneAge = 0;
// boucle sur le tableau des clients
for(var i=0; i<clients.length; i++) {
  cumulAges = cumulAges + clients[i].age;
}

moyenneAge = cumulAges / clients.length; // 224 divisé par 5 => 44.8
console.log("Moyenne d'âge des clients : " + moyenneAge + " ans");

// Affichage du plus jeune client
var youngestAge = clients[0].age; // je mémorise l'âge du premier client
var youngestClientName = clients[0].name; // mémorise le nom du premier client

//boucle dans les tableau clients
for(var i=1; i<clients.length; i++) {
  if(clients[i].age < youngestAge) {
    youngestAge = clients[i].age;
    youngestClientName = clients[i].name;
  }
  //console.log("Passage dans la boucle n°" + i + "-> youngestAge: " + youngestAge);
}
console.log("Le plus jeune client a " + youngestAge + " ans");
console.log("Il s'appelle " + youngestClientName);

// boucle while (tant que)
var test = true;
var i = 0; // compteur
while (test) {
  i++;
  console.log("merci");

  if (i > 100) {
    //test = false;
    test = !test;
  }
} // fin while

// parcours du tableau clients avec
// une boucle while
var i = 0; // compteur
while (i < clients.length) {
  console.log(clients[i].name);
  i++; //incrémentation
}

// boucle do...while
// cette boucle éxecute des instructions
// AVANT l'évaluation de la condition de sortie
var test = true;
var i = 8;
do {
  // les instructions suivantes seront éxécutées
  // AU MOINS UNE FOIS (avant l'évaluation de condition)
  if (i > 5) {
    test = !test;
  }
  i++; // incrémentation
  console.log("Thank you");
} while (test);

// switch...case
var name = clients[0].name;
switch (name) {
  case "Italo Calvino":
    console.log("Grand écrivain italien");
    break;
  case "Victor Hugo":
    console.log("L'auteur des Misérables");
    break;
  case "Sylvain Tesson":
    console.log("Un grand voyageur");
    break;
  default:
    console.log("cas non prévu");
} // fin switch

// la structure swith case limite
// la comparaion à l'égalité stricte
// ex: 63 == 63
// je ne peux pas évaluer la condition > ou <
var age = clients[0].age;
switch (age) {
  case 63: // OK
  //case age > 10: // NON VALIDE
    console.log("L'auteur connu des Misérables");
    break;
  default:
    console.log("cas non prévu");
} // fin switch

// exercice swith case
for (var i = 0; i < couleurs.length; i++) {
  var couleur = couleurs[i];
  switch (couleur) {
    case "orange":
      console.log("couleur de la révolution ukrainienne");
      break;
    case "vert":
      console.log("couleur de l'espoir");
      break;
    case "cerise":
      console.log("couleur de la douceur");
      break;
    case "jaune":
      console.log("couleur de l'or");
      break;
    default:
      console.log("couleur non traitée");
  }
}
