$(document).ready(function() {

let oink = document.getElementById("oink");

oink.addEventListener('click', function(e) {
  e.preventDefault();
  var audio = new Audio("pig.mp3")
  audio.play()

  setTimeout(function() {
    document.location.href = 'pig-map.html'
  }, 2500)
  })



 let moo = document.getElementById("moo")

 moo.addEventListener('click', function(e) {
   e.preventDefault();
   var cowAudio = new Audio("moo.mp3")
   cowAudio.play()

   setTimeout(function() {
     document.location.href = 'pig-map.html'
   }, 2500)


 })

 let baGok = document.getElementById("ba-gok")

 baGok.addEventListener('click', function(e) {
   e.preventDefault();
   var baGokAudio = new Audio("ba-gok.mp3")
   baGokAudio.play()

   setTimeout(function() {
     document.location.href = 'pig-map.html'
   }, 2500)


 })

  $('.sidenav').sidenav();
 });
