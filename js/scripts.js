function beepBoop(nam, str) {
  if (str.indexOf("3") >= 0) {
    return "Won't you be my neighbor, " + nam + "?";
  }
  if (str.indexOf("2") >= 0) {
    return "Boop!";
  }
  if (str.indexOf("1") >= 0) {
    return "Beep!";
  }
  return str;
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name").val();
    const numStr = $("input#number").val();
    const num = parseInt(numStr);


    $("#formOne").hide();
    $("#story").show();
    $("p#s1").text(numStr);

    if($("input#reversed")[0].checked) {
      for (let i = num; i >= 0; i--) {
        $("ul#s2").append("<li>" + beepBoop(userName, i.toString()) + "</li>");
      }
    } else {
      for (let i = 0; i <= num; i++) {
        $("ul#s2").append("<li>" + beepBoop(userName, i.toString()) + "</li>");
      }
    }

  });
});