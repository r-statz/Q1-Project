
let cuts = {
      loin : {
        name : "Loin",
        priceLb : "$3.99/lb",
        price: 3.99,
        count: 0
    },
      spareRib : {
        name: "Spare Rib",
        priceLb : "$3.49/lb",
        price: 3.49,
        count: 0
    },
      ham : {
        name : "Ham",
        priceLb : "$2.99/lb",
        price: 2.99,
        count: 0
    },
     shoulder : {
        name : "Shoulder",
        priceLb : "$1.99/lb",
        price: 1.99,
        count:0
    },
      blade : {
        name : "Blade",
        priceLb : "$2.99/lb",
        price: 2.99,
        count: 0
    },
      belly : {
        name : "Belly",
        priceLb : "$5.99/lb",
        price: 5.99,
        count: 0
    }}

$(document).ready(function() {
  $('.sidenav').sidenav();

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

    loin.addEventListener('click', function() {
      let badgeHtml = `<span class="badge" id="#badge">${count}</span>`
      count++;
      badge.innerHTML = badgeHtml

      cuts.loin.count++
      localStorage.setItem("loin", JSON.stringify(cuts.loin))


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

      cuts.spareRib.count++

     localStorage.setItem("spareRib", JSON.stringify(cuts.spareRib))
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

      cuts.blade.count++
      localStorage.setItem("blade", JSON.stringify(cuts.blade))
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

      cuts.shoulder.count++

     localStorage.setItem("shoulder", JSON.stringify(cuts.shoulder))
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

      cuts.belly.count++

     localStorage.setItem("belly", JSON.stringify(cuts.belly))
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

      cuts.ham.count++

     localStorage.setItem("ham", JSON.stringify(cuts.ham))
  });

});
