
document.addEventListener('DOMContentLoaded', function () {

  let spareRib = document.getElementById("spare-rib")
  let blade = document.getElementById("blade")
  let shoulder = document.getElementById("shoulder")
  let loin = document.getElementById("loin")
  let belly = document.getElementById("belly")
  let ham = document.getElementById("ham")
  let badge = document.getElementById("badge")

//loin events
    loin.onmouseover = function() {
      document.getElementById('popup').style.display = 'block';
      popup.textContent = "$3.99/lb";
    }
    loin.onmouseout = function() {
      document.getElementById('popup').style.display = 'none';
    }


    ;
    let count = 1;
    loin.addEventListener('click', function() {

      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;
      console.log(count)
      badge.innerHTML = badgeHtml
      console.log("porks")
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

  });




});

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
