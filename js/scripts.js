function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  var cost = 10;
  if (this.size === "small") {
    cost += 2 + (this.toppings.length);
  } else if (this.size === "large") {
    cost += 5 + (this.toppings.length);
  }
    return cost;
};

$(document).ready(function() {
  $("form#pizzaSelections").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("select#pizzaSize").val();
    var toppingsInput = [];
    $("input:checked").each(function() {
      toppingsInput.push($(this).val());
    });

    var newPizza = new Pizza(sizeInput, toppingsInput);
      console.log("created new object")

    $("ul#pizzaReciept").append("<li>$" + newPizza.price() + "</li>");

  });
});
