document.addEventListener('DOMContentLoaded', function () {

  $.getJSON("js/cart.json", function(data) {
 console.log(data[0])
})

let submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
  event.preventDefault();
});

});
