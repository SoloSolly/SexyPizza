$(document).ready(function(){




    $("#submit").click(function(){
		var name = $("#Name").val();
		var email = $("#Email").val();
		var info = $("#Message").val();
		$(".Name").text(name);
		$(".Email").text(email);
		$(".Message").text(info);
        $("#output").show();
        alert("Thank you " + name + " for your feedback. ");
        // alert("Thank you " + name + " for your feedback. " +email);
        
        
    });

    $("#submit").click(function(event) {
        // var sizeInput = document.getElementById("size");
        // var size = sizeInput.options[sizeInput.selectedIndex].text();
        var size = $("#size option:selected").val();
  
        // var toppingInput = document.getElementById("topping");
        // var topping = toppingInput.options[toppingInput.selectedIndex].text();
        var topping = $("#topping option:selected").val();
  
        // var crustInput = document.getElementById("crust");
        // var crust = crustInput.options[crustInput.selectedIndex].text();
        var crust = $("#crust option:selected").val();
  
        var qty = parseInt ($("input#qty").val());
  
        // alert(size);
        // alert(topping);
        // alert(crust);
        // alert(qty);
        
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


























});

