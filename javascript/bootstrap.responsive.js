jQuery('document').ready(function(){
  //  $("#mainContent").find("img").addClass("img-responsive");
    $("#mainContent").find("table").addClass("table table-bordered table-striped");
    $( "table" ).wrap( "<div class='table-responsive'></div>" );
    $("#mainContent").find("iframe").addClass("embed-responsive-item");
    $( "iframe" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );   
   // $("#mainContent").find("ul").addClass("list-style");
});
