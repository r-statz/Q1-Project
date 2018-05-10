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
$(document).ready(function(){
    $('.sidenav').sidenav();

    let local = [];
    let total = 0;
     for (let i = 0; i < localStorage.length; ++i ) {
       local.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
       let one = local[i].name
       let two = local[i].count
       let three = local[i].price
       total+= (two * three)

       let loinHtml =`<td>${one}</td><td>${two}</td><td>${three}</td>`

       let checkout = document.getElementById("checkout")
       let item = document.createElement("tr")
       item.innerHTML = loinHtml
       checkout.appendChild(item)
     }

     let cost = document.getElementById("cost")
     let totalSubmit = document.getElementById("total-submit")

     totalSubmit.addEventListener('click', function() {

       cost.innerHTML = "$" + total.toFixed(2)
     })

     let clearButton = document.getElementById("clear-button")

     clearButton.addEventListener('click', function() {

       localStorage.clear();
       checkout.innerHTML = ""
       cost.innerHTML = ""
     })
})
