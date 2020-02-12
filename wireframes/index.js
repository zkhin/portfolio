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

const debounce = fn => {
  let frame;

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

$(handleToggleNav);
document.addEventListener("scroll", debounce(storeScroll), { passive: true });
storeScroll();
