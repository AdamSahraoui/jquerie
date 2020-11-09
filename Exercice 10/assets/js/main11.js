$(document).ready(function() {
    $("#green").mouseover(function() {
    $("#text").css("color","green");
    $("#green").mouseleave(function(){
        $("#text").css("color","black");
    });
     });
    
     $("#red").mouseover(function() {
    $("#text").css("color","red");
    $("#red").mouseleave(function(){
        $("#text").css("color","black");
    });
     });

     $("#blue").mouseover(function() {
$("#text").css("color","blue");
$("#blue").mouseleave(function(){
    $("#text").css("color","black");
});
     });
      });