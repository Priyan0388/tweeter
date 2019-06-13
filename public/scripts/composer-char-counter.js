$(document).ready(function() {
    $("textarea").keydown(function(){
      var maxLength = 140;
      var charLength = $(this).val().length;
      $(this).siblings('.counter').html(maxLength - charLength);
      console.log (maxLength - charLength);
      if (charLength >= maxLength){
        $(this).siblings('.counter').addClass("red");
        console.log("You have reached limit!");
      } 
      if (charLength <= maxLength){
        $(this).siblings('.counter').removeClass("red");
      }
    });
  });

  