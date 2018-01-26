function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.order = function() {
  return this.size + this.topping;
}

Pizza.prototype.price = function() {
  var cost = 10;
  if (this.size === "small") {
    cost = cost + 2;
  } else if (this.size === "large") {
    cost = cost + 5;
  } else {
    cost = cost
  }
    return cost;
};

$(document).ready(function() {
  $("form#pizzaSelections").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("select#pizzaSize").val();

    var newPizza = new Pizza(sizeInput);
      console.log("created new object")

    $("ul#pizzaReciept").append("<li>$" + newPizza.price() + "</li>");

  });
});
