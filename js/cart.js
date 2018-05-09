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

    let loinHtml =
    `<td>wards</td>
    <td>wards</td>
    <td>wards</td>
    `
    let checkout = document.getElementById("checkout")
    // console.log(checkout)
    let item = document.createElement("tr")
    item.innerHTML = loinHtml

    checkout.appendChild(item)

    console.log(localStorage.getItem("loin"))
})
