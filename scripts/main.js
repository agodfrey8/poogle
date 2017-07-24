$(document).ready(function(){
  $("#search-button").click(function(){
    var search = "+" + $("#search-text").val().split(" ").join("+");
    var game = "\"monster+hunter\"";
    $.each($("input[name='game']:checked"), function(){
      game += $(this).val();
    });
    $("#search-link").attr("href", "https://www.google.co.jp/search?hl=en&site=webhp&q=" + game + search);
  });
  $("#search-text").keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#search-button').click();//Trigger search button click event
    }
});
});
