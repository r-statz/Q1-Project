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
     for (let i = 0; i < localStorage.length; ++i ) {
       local.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
       let one = local[i].name
       let two = local[i].count
       let three = local[i].price

       let loinHtml =`<td>${one}</td><td>${two}</td><td>${three}</td>`

       let checkout = document.getElementById("checkout")
       let item = document.createElement("tr")
       item.innerHTML = loinHtml
       checkout.appendChild(item)


       console.log(one, two, three)
// console.log(local[i].count)
// console.log(local[i].price)
     }


  




})
