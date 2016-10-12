function ready() {
  var imagesVisible = true; // flag, boolean
  var test = document.getElementById("titre").innerText;
  console.log(test);

  document.getElementById("titre").innerText = "Ciao !";

  var images = document.getElementsByClassName("client");
  console.log(images);

  // parcourir le tableau des images
  for(var i=0; i<images.length; i++) {
    // manipulation d'un attribut html
    images[i].alt = "ok";
    // manipulation du css
    images[i].style.border = "4px orange solid";
    //images[i].style.width = "300px";

    images[i].addEventListener("click", function() {
      // le mot- clé this fait référence à l'éléments
      // porteur de l'événement
      reset(); // on remet les images à 100px
      this.style.width = "200px";
    });
  }

  var div = document.createElement("div");
  div.innerText = "div ajouté par javasccript";
  document.body.appendChild(div);

  // générer dynamiquement des éléments HTML d'un tableau
  // de données
  var clients = ["Hugo", "Calvino", "Hesse"];
  for (var i = 0; i < clients.length; i++) {
    var p = document.createElement("p");
    p.innerText = clients[i];
    document.body.appendChild(p);
  }

  // Evénements
  var btn = document.getElementById("btnTest");
  btn.addEventListener("click", function() {
    alert("click");
  });

  function reset() {
    for(var i=0; i<images.length; i++) {
      images[i].style.width = "100px";
    }
  }

  function changeColor() {
    // utiliser la propriété value pour les input
    // et non innerText
    //var color = document.getElementById("inputColor").value;
    var color = document.getElementById("selectColor").value;

    // boucle sur les images
    for(var i=0; i<images.length; i++) {
      images[i].style.borderColor = color;
    }
  }

  function hideImages() {
    for (var i = 0; i < images.length; i++) {

      if (imagesVisible) {
        // on masque l'image
        images[i].style.opacity = 0;
        btnHideImages.innerText = "Afficher Images";
        //images[i].style.visibility = "hidden";
      } else { // l'image est masquée
        // on affiche l'image
        images[i].style.opacity = 1;
        btnHideImages.innerText = "Masquer Images";
      }
      //images[i].style.display = "none";
    }
    imagesVisible = !imagesVisible;
  }

  var btnReset = document.getElementById("btnReset");
  btnReset.addEventListener("click", reset);

  var btnValidColor = document.getElementById("btnValidColor");
  btnValidColor.addEventListener("click", changeColor);

  var selectColor = document.getElementById("selectColor");
  selectColor.addEventListener("change", changeColor);

  var btnHideImages = document.getElementById("btnHideImages");
  btnHideImages.addEventListener("click", hideImages);

} // fin ready()
