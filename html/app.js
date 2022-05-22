open_sound = false;

window.addEventListener("message", function (event) {
  var opensound = new Audio("opensound.mp3");
  opensound.volume = 0.1;

  if (event.data.action == "openUI") {
    message = event.data.message;
    $("#message").html(message);
    $("#ui").css("left", "1%");
    $("#ui").removeClass("hide");
    $("#ui").addClass("show");

    if (!open_sound) {
      opensound.play();
      open_sound = true
    }

  } else if (event.data.action == "closeUI") {
    $("#ui").removeClass("show");
    $("#ui").addClass("hide");
    open_sound = false;
  }

  function removeClass() {
    $("#wrapper").removeClass();
    $("#main").removeClass();
  }

  // Purple
  if (event.data.color == "purple") {
    removeClass();
    $("#wrapper").addClass("ui_purple border_purple");
    $('#main').addClass('ui_icon')
    // White
  } else if (event.data.color == "white") {
    removeClass();
    $("#wrapper").addClass("ui_white border_white");
    $('#main').addClass('ui_icon')
    // Red
  } else if (event.data.color == "red") {
    removeClass();
    $("#wrapper").addClass("ui_red border_red");
    $('#main').addClass('ui_icon')
    // Green
  } else if (event.data.color == "green") {
    removeClass();
    $("#wrapper").addClass("ui_green border_green");
    $('#main').addClass('ui_icon')
  }
});