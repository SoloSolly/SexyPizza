var size, topping, crust, qty = 0, qty1 = 0;
var pizzaOutput = 0, toppingOutput = 0, crustOutput = 0;
var address, pizzaTotal=0, pizzaNumber=0, delivery=500, location2;
var verifier;

function checkout(){
   size = document.getElementById('size').value;
   topping = document.getElementById('topping').value;
   crust = document.getElementById('crust').value;
   pizzaNumber = document.getElementById('qty').value;

   if(size=="Small"){
      pizzaOutput = 500;
   }else if(size=="Medium"){
      pizzaOutput = 700;
   }else if(size=="Large"){
      pizzaOutput = 950;
   }

   if(topping=="veggie pizza"){
      toppingOutput = 100;
   }else if(topping=="hawaii pizza"){
      toppingOutput = 100;
   }else if(topping=="beef pizza"){
      toppingOutput = 200;
   }else if(topping=="chicken pizza"){
      toppingOutput = 200;
   }

   if(crust=="crispy"){
      crustOutput = 200;
   }else if(crust=="stuffed"){
      crustOutput = 200;
   }else if(crust=="glutenfree"){
      crustOutput = 200;
   }
   pizzaTotal = crustOutput + toppingOutput + pizzaOutput;
   qty = pizzaTotal * pizzaNumber + delivery;
   qty1 = pizzaTotal * pizzaNumber;
}

function checkValues(){
   if(pizzaOutput==0&&toppingOutput==0&&crustOutput==0){
      alert("Select a pizza size, topping and crust .");
   }else if(toppingOutput==0||crustOutput==0||pizzaOutput==0){
      alert("Select a pizza size, topping and crust .");
   }else if(verifier==1){
      alert(`You have ordered ${size} pizza with ${topping} topping and ${crust} crust. Number of pizza ordered is ${pizzaNumber} and your total is ${qty}.`);
      alert("Pick your pizza at the nearest store");
   }else if(verifier==2){
      var location = prompt("Do you want your pizza Delivered? Enter location :");
      // location2 = location;
      alert(`You have ordered ${size} pizza with ${topping} topping and ${crust} crust. Number of pizza ordered is ${pizzaNumber} and your total is ${qty}.`);
      alert(`Delivery will be at ${location}`);
   }
}

function verifyy(){
   verifier = 2;
}

function verify(){
verifier = 1;
}

function pickup(){
   alert(`Summary: Pizza ${size} = ${pizzaOutput} , ${crust} = ${crustOutput}, ${topping} = ${toppingOutput} . ${pizzaNumber} pizzas ordered, Total order cost= ${qty1}`)
}


// $(document).ready(function() {
//     $("#submit").click(function(event) {

//        var size = $("#size option:selected").val();
 
//        var topping = $("#topping option:selected").val();
 
//        var crust = $("#crust option:selected").val();
 
//        var qty = parseInt ($("input#qty").val());
 
       
//        //Jquery append users order
//        $("#displayqty").append(qty);
//        $("#displaycrust").append(crust);
//        $("#displaysize").append(size);
//        $("#displaytopping").append(topping);
 
//        $("#yourorder").show();
//        event.preventDefault();
//    });
 
//    $('#orderme').click(function(){
//       var address = prompt("Where do you want the pizza delivered?");
//       alert("Your Pizza will be delivered at " + address);
//     });
//     $('#pickme').click(function(){
//        alert("Alright! Your order will be waiting for you when you get here :)")
//     });
 
//  });
 
 


//  $("#submitcontactus").click(function(){
//    var name = $("#Name").val();
//    var email = $("#Email").val();
//    var info = $("#Message").val();
//    $(".Name").text(name);
//    $(".Email").text(email);
//    $(".Message").text(info);
//      $("#output").show();
//      alert("Thank you " + name + " for your feedback :) ");
//      // alert("Thank you " + name + " for your feedback. " +email);
     
     
//  });
 