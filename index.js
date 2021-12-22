// $("h1").css("color", "green");
//
// $("button").css("color", "red");

// $("h1").click(function(){
//   $("h1").css("color", "red");
// });

// $("button").click(function(){
//   $("h1").css("color", "purpule");
// });

$(document).keypress(function(event){
  $("h1").text(event.key);
});
