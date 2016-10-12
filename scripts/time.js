function ready() {

  var delay = 1000 * 5; // 5000 millisecondes, 5s.

  setTimeout(function() {
    // traitement asynchrone (non bloquant)
    console.log("coucou");
  }, delay);

  console.log("ciao"); // ciao est affiché avant le retour
  // de setTimeout

  var i = 0;
  setInterval(function() {
    // 'merci' affiché dans la console toutes les demi-secondes
    //console.log("merci !" + i++);
  }, 500);

  // slideshow
  var images = document.getElementsByClassName("client");

  var j = 1;
  setInterval(function() {
    hideAllImages();
    images[j].style.display = "inline";
    j++;
    if (j == images.length) {
      j = 0;
    }
  }, 4000);


  function hideAllImages() {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
  }


} // fin ready()
