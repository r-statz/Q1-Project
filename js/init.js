
$(document).ready(function() {
  $('.sidenav').sidenav();
  $.getJSON("js/cart.json", function(data) {
    console.log("howdy")

  });


  let spareRib = document.getElementById("spare-rib")
  let blade = document.getElementById("blade")
  let shoulder = document.getElementById("shoulder")
  let loin = document.getElementById("loin")
  let belly = document.getElementById("belly")
  let ham = document.getElementById("ham")
  let badge = document.getElementById("badge")
  let count = 1;
//loin events
    loin.onmouseover = function() {
      document.getElementById('popup').style.display = 'block';
      popup.textContent = "$3.99/lb";
    }
    loin.onmouseout = function() {
      document.getElementById('popup').style.display = 'none';
    }


// console.log("howdy");

    loin.addEventListener('click', function() {

      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;

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
    spareRib.addEventListener('click', function() {
      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;

      badge.innerHTML = badgeHtml
      console.log("spare ribs")
  });

//blade events
    blade.onmouseover = function() {
    document.getElementById('popup').style.display = 'block';
    popup.textContent = "$2.99/lb";

    }
    blade.onmouseout = function() {
      document.getElementById('popup').style.display = 'none';
    }
    blade.addEventListener('click', function() {
      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;

      badge.innerHTML = badgeHtml
      console.log("blade")
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
      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;

      badge.innerHTML = badgeHtml
      console.log("shoulder")
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
      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;

      badge.innerHTML = badgeHtml
      console.log("belly")
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
      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;

      badge.innerHTML = badgeHtml
      console.log("hambones")
  });

});
