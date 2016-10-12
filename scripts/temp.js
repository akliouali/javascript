//http://www.w3schools.com/js/js_htmldom_document.asp

function load() {
  var test = document.getElementById("titre").innerText;
  console.log(test);

  document.getElementById("titre").innerText = "Ciao !";

  var images = document.getElementsByClassName("client");
  console.log(images);

  for(i=0; i<images.length; i++) {
    images[i].alt = "ok";
    images[i].style.border = "3px red solid";
    images[i].style.width = "300px";
    images[i].addEventListener("click", function() {
      this.style.width = "100px";
    });
  }

  var div = document.createElement("div");
  div.innerText = "ho ho ho";
  div.setAttribute("class", "test");
  document.body.appendChild(div);

}
