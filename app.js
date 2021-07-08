function noExist() {
  alert(
    "Bu içeriği şu anda görüntüleme izniniz yok.\nDetaylı bilgi için  --->https://bit.ly/3e0BNqi"
  );
}
function cantEnterUser() {
  alert(
    "Şu anda bu kişiye geçemezsiniz.\nDetaylı bilgi için  --->https://bit.ly/3e0BNqi"
  );
}
function cantEnterPage() {
  alert(
    "Şu anda bu sayfayı görüntüleme izniniz yok.\nDetaylı bilgi için ---> " +
      redirURL +
      "https://bit.ly/3e0BNqi"
  );
}

$(function () {
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 500,
    },
    hide: {
        effect: "blind",
      duration: 400,
    },
  });

  $(".opener").on("click", function () {
    $("#dialog").dialog("open");
  });
});
