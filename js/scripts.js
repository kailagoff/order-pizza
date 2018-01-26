function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.order = function() {
  return this.size + this.topping;
}

Pizza.prototype.cost = function() {

}

$(document).ready(function) {
  $("#button").click(function() {



    $("#pizzaReciept").append(pizza.order()).show();
  })
}
