$(function () {
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 500,
    },
    hide: {
        effect: "blind",
      duration: 401,
    },
  });

  $(".opener").on("click", function () {
    $("#dialog").dialog("open");
  });
  
}); 
