$(document).ready(function(){
  if(!localStorage.getItem("game")) {
    $.each($("input[name='game']"), function(){
      if($(this).val() == ""){
        $(this).prop('checked', true);
      }
    });
  }
  else {
    $.each($("input[name='game']"), function(){
      if($(this).val() == localStorage.getItem("game")){
        $(this).prop('checked', true);
      }
    });
  }
  $("#search-button").click(function(){
    var search = "+" + $("#search-text").val().split(" ").join("+");
    var game = "\"monster+hunter\"";
    $.each($("input[name='game']:checked"), function(){
      game += $(this).val();
      localStorage.setItem("game", $(this).val());
    });
    $("#search-link").attr("href", "https://www.google.com/search?q=" + game + search);
  });
  $("#google-button").click(function(){
    var search = "+" + $("#search-text").val().split(" ").join("+");
    $("#google-link").attr("href", "https://www.google.com/search?q=" + search);
  });
  $("#search-text").keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      $("#search-button").click();
    }
  });
});
