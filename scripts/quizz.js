$(document).ready(function() {

  var answer = "";
  var correctAnswer1 = "Bucarest"; // avec majuscule
  var correctAnswer2 = "bucarest"; // sans majuscule

  $("#quizz button").click(function() {
    // récupérer la valeur saisie dans le champ de saisie
    answer = $(this).prev().val();

    // comparer la réponse saisie à bonne réponse
    if (answer == correctAnswer1 || answer == correctAnswer2) {
      // bonne réponse
      $(this).next().text("Bonne réponse !");
    } else {
      $(this).next().text("Mauvaise réponse !");
    }

  });

});
