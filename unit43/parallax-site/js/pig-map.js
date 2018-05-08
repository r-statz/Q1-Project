document.addEventListener('DOMContentLoaded', function () {

let oink = document.getElementById("oink");

oink.addEventListener('click', function(e) {
  e.preventDefault();
  var audio = new Audio("../audio/pig.mp3")
  audio.play()

  setTimeout(function() {
    document.location.href = 'pig-map.html'
  }, 2500)
})

let moo =  document.getElementsById("")
});
