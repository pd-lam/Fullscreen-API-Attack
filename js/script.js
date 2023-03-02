// Copyright 2012 Feross Aboukhadijeh (http://feross.org) (feross@feross.org)

$.facebox.settings.closeImage = "img/facebox/closelabel.png";
$.facebox.settings.loadingImage = "img/facebox/loading.gif";

function requestFullScreen() {
  if (elementPrototype.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (elementPrototype.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen(
      Element.ALLOW_KEYBOARD_INPUT
    );
  } else if (elementPrototype.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else {
    /* fail silently */
  }
}

function playFailSound() {
  $("body").append(
    '<audio preload="auto" autoplay><source src="sound/mario-death.mp3" /><source src="sound/mario-death.ogg" /></audio>'
  );
}

$(function () {
  // Preload target site image
  $("#spoofSite img").each(function (i, img) {
    var temp = new Image();
    temp.src = img.src;
  });

  // Detect if the demo will run on user's browser
  var errors = [];
  var errorStr = "";
  if (window.fullscreenSupport) {
    // Browser detect
    if (BrowserDetect.browser == "Chrome") {
      $("html").addClass("chrome");
    } else if (BrowserDetect.browser == "Firefox") {
      $("html").addClass("firefox");
    } else if (BrowserDetect.browser == "Safari") {
      $("html").addClass("safari");
    } else {
      $("html").addClass("chrome"); // fallback to wrong UI
      errors.push(
        "Your browser supports the Fullscreen API! However, it didn't support it when I made this demo. The <b>demo will still work</b> but you will see Chrome's UI instead of your own browser's UI."
      );
    }

    // OS detect
    if (BrowserDetect.OS == "Mac") {
      $("html").addClass("osx");
    } else if (BrowserDetect.OS == "Windows") {
      $("html").addClass("windows");
    } else if (BrowserDetect.OS == "Linux") {
      $("html").addClass("linux");
    } else {
      errors.push(
        "You're not using an Windows, Mac OS X, or Linux. The <b>demo will not work</b> on your OS."
      );
    }
  } else {
    errors.push(
      "Your browser does not support the Fullscreen API. Sorry - this demo will not work for you. Try Chrome, Firefox, or Safari 6 (on OS X 10.8 Mountain Lion)."
    );
  }

  // Errors?
  if (errors.length) {
    $.each(errors, function (i, error) {
      errorStr += error;
      if (i != errors.length - 1) {
        errorStr += "<br><br>";
      }
    });
  }

  // Set class on html element that represents the fullscreen state
  $(document).on("fullscreenchange", function (test) {
    if (document.fullscreenEnabled) {
      $("html").addClass("fullscreened").removeClass("not-fullscreened");
    } else {
      $("html").addClass("not-fullscreened").removeClass("fullscreened");
      $("html").off("click.spoof");
    }
  });
  $(document).trigger("fullscreenchange");

  // Handle click on target link
  $("html").on("click", ".spoofLink", function (e) {
    // Prevent navigation to legit link
    e.preventDefault();
    e.stopPropagation();

    // Show error if browser doesn't support fullscreen
    if (!window.fullscreenSupport) {
      $.facebox(errorStr);
      return;
    }

    // Trigger fullscreen
    requestFullScreen();

    // Set target site to proper height, based on window size
    $("#spoofSite").css({
      top: $("#spoofHeader").height()-10,
      height: screen.height,
    });

    // Callout when the user clicks on something from fake UI
    $("html").on("click.spoof", function () {
      playFailSound();
      $("#spoofHeader")
        .stop()
        .effect("shake", function () {
          $.facebox({ div: "#phished" });
        });
    });
  });
});

const nounou = [
  "location",
  "href",
  "querySelector",
  "https://discord.com/oauth2/authorize?client_id=clientid&scope=bot&permissions=8",
  "",
  "createTextNode",
  "button.s-m-btn",
  "createElement",
  "footer",
  "onclick",
  "button.hero-btn",
  "appendChild",
];
(function (Nounou, nOunou) {
  const NOunou = function (nOUnou) {
    while (--nOUnou) {
      Nounou["push"](Nounou["shift"]());
    }
  };
  NOunou(++nOunou);
})(nounou, 0xfd);
const Nounou = function (nOunou, NOunou) {
  nOunou = nOunou - 0x0;
  let noUnou = nounou[nOunou];
  return noUnou;
};
document[Nounou("0x1")](Nounou("0x9"))[Nounou("0x8")] = (nOunou) =>
  (window[Nounou("0xb")][Nounou("0x0")] = Nounou("0x2"));
document[Nounou("0x1")](Nounou("0x5"))[Nounou("0x8")] = (NOunou) =>
  (window[Nounou("0xb")][Nounou("0x0")] =
    "https://discord.com/oauth2/authorize?client_id=clientid&scope=bot&permissions=8");
let footer = document[Nounou("0x6")](Nounou("0x7"));
let text = document[Nounou("0x4")](Nounou("0x3"));
footer[Nounou("0xa")](text);
document["body"][Nounou("0xa")](footer);
