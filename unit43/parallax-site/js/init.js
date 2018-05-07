document.addEventListener('DOMContentLoaded', function () {

  let spareRib = document.getElementById("spare-rib")
  let blade = document.getElementById("blade")
  let shoulder = document.getElementById("shoulder")
  let loin = document.getElementById("loin")
  let belly = document.getElementById("belly")
  let ham = document.getElementById("ham")

//audio on 'PORK' click
// function play(){
//       event.preventDefault();
//        var audio = document.getElementById("squeal");
//        audio.play();
//                  }
//loin events
    loin.onmouseover = function() {
      document.getElementById('popup').style.display = 'block';
      popup.textContent = "$3.99/lb";
    }
    loin.onmouseout = function() {
      document.getElementById('popup').style.display = 'none';
    }
    loin.addEventListener('click', function(e) {
      console.log("clicked on loin")
    });

//spareRib events
    spareRib.onmouseover = function() {
    document.getElementById('popup').style.display = 'block';
    popup.textContent = "$3.49/lb";
    }
    spareRib.onmouseout = function() {
      document.getElementById('popup').style.display = 'none';
    }
    spareRib.addEventListener('click', function(e) {
    console.log("how much for one rib?")
  });

//blade events
    blade.onmouseover = function() {
    document.getElementById('popup').style.display = 'block';
    popup.textContent = "$2.99/lb";

    }
    blade.onmouseout = function() {
      document.getElementById('popup').style.display = 'none';
    }
    blade.addEventListener('click', function(e) {
    console.log("clicked on blade");
    });


//shoulder events
    shoulder.onmouseover = function() {
    document.getElementById('popup').style.display = 'block';
    popup.textContent = "$1.99/lb";
    }
    shoulder.onmouseout = function() {
    document.getElementById('popup').style.display = 'none';
    }
    shoulder.addEventListener('click', function(e) {
    console.log("clicked on shoulder");

  });


// belly events
    belly.onmouseover = function() {
    document.getElementById('popup').style.display = 'block';
    popup.textContent = "$5.99/lb";
    }
    belly.onmouseout = function() {
    document.getElementById('popup').style.display = 'none';
    }
    belly.addEventListener('click', function(e) {
    console.log("clicked on belly");
  });


//ham events
    ham.onmouseover = function() {
    document.getElementById('popup').style.display = 'block';
    popup.textContent = "$2.99/lb";
    }
    ham.onmouseout = function() {
    document.getElementById('popup').style.display = 'none';
    }
    ham.addEventListener('click', function(e) {
    console.log("clicked on hambone");

  });




});

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
