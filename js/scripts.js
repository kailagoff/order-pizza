function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var cost = 10;

  if (this.size === "personal") {
    cost = cost - 3 + (this.toppings.length * 3);
  } else if (this.size === "small") {
    cost = cost - 1 + (this.toppings.length * 3);
  } else if (this.size === "medium") {
    cost += 1 + (this.toppings.length * 3);
  } else if (this.size === "large") {
    cost += 3 + (this.toppings.length * 3);
  } else {
    cost = cost
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

    $("ul#pizzaReciept").append("<li>$" + newPizza.price() + ".00" + "</li>");

    var reset = function() {
      $("select#size").val("");
    }

    reset();

  });
});
