$(document).ready(function() {
  $("form#form1").submit(function(event) {
    var groceries = ["item1", "item2", "item3", "item4", "item5"];


    var inputValue = groceries.map(function(item){
      return $("input#" + item).val();
    });

    // alert(inputValue);

    var capValues = inputValue.map(function(userValues){
      return userValues.toUpperCase();
    });

    // alert(capValues);

    var finalValues = capValues.sort();

    // alert(finalValues);

    finalValues.forEach(function(value) {
      $("form").hide();
      $("#output").append("<li>" + value + "</li>");
    });

    event.preventDefault();
  });
});
