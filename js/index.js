


$(document).ready(function() {
    $("#submit").click(function(event) {

       var size = $("#size option:selected").value();
 
       var topping = $("#topping option:selected").value();
 
       var crust = $("#crust option:selected").value();
 
       var qty = parseInt ($("input#qty").value());
 
       
       //Jquery append users order
       $("#displayqty").append(qty);
       $("#displaycrust").append(crust);
       $("#displaysize").append(size);
       $("#displaytopping").append(topping);
 
       $("#yourorder").show();
       event.preventDefault();
   });
 
   $('#orderme').click(function(){
      var address = prompt("Where do you want the pizza delivered?");
      alert("Your Pizza will be delivered at " + address);
    });
    $('#pickme').click(function(){
       alert("Alright! Your order will be waiting for you when you get here :)")
    });
 
 });
 
 


 $("#submitcontactus").click(function(){
   var name = $("#Name").value();
   var email = $("#Email").value();
   var info = $("#Message").value();
   $(".Name").text(name);
   $(".Email").text(email);
   $(".Message").text(info);
     $("#output").show();
     alert("Thank you " + name + " for your feedback :) ");
     // alert("Thank you " + name + " for your feedback. " +email);
     
     
 });
 