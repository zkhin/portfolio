function handleToggleNav() {
  $(".topnav").on("click", ".icon", event => {
    event.preventDefault();
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });
}

$(handleToggleNav);
