function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var cost = 10;

  if (this.sizePizza === "small") {
    cost -= 2 + (this.toppings.length + 3);
  } else if (this.sizePizza === "large") {
    cost += 2 + (this.toppings.length + 3);
  } else {
    cost = cost + (this.toppings.length + 3);
  }
    return cost;
};

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("select#size").val();
    console.log($("select#size").val());
    var toppingsInput = [];

    $("input:checked").each(function() {
      toppingsInput.push($(this).val());
    });

    var newPizza = new Pizza(sizeInput, toppingsInput);
      console.log(newPizza)

    $("ul#pizzaReciept").append("<li>$" + newPizza.price() + "</li>");

  });
});
