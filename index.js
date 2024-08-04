$(".key").click(function () {
  $(this).addClass("clicked");
  setTimeout(function () {
    $(".clicked").removeClass("clicked");
  }, 100);
});

$(".key").click(function () {
  let audio = new Audio("./sound/piano-" + this.id + ".mp3");
  audio.play();
});

function clicked(key) {
  $(key).addClass("clicked");
  setTimeout(function () {
    $(".clicked").removeClass("clicked");
  }, 100);
}

function playC() {
  let c = new Audio("./sound/piano-c.mp3");
  c.play();
  clicked("#c");
}

function playD() {
  let d = new Audio("./sound/piano-d.mp3");
  d.play();
  clicked("#d");
}

function playE() {
  let e = new Audio("./sound/piano-e.mp3");
  e.play();
  clicked("#e");
}

function playF() {
  let f = new Audio("./sound/piano-f.mp3");
  f.play();
  clicked("#f");
}

function playG() {
  let g = new Audio("./sound/piano-g.mp3");
  g.play();
  clicked("#g");
}

$(".jingle").click(function () {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      playE();
    }, 500 * i);
  }

  for (let i = 500; i < 2000; i += 500) {
    setTimeout(function () {
      playE();
    }, 1500 + i);
  }

  setTimeout(function () {
    playE();
  }, 4000);

  setTimeout(function () {
    playG();
  }, 4500);

  setTimeout(function () {
    playC();
  }, 5000);

  setTimeout(function () {
    playD();
  }, 5500);

  setTimeout(function () {
    playE();
  }, 6000);

  for (let i = 6500; i < 9000; i += 500) {
    setTimeout(function () {
      playF();
    }, 500 + i);
  }

  for (let i = 9000; i < 10000; i += 500) {
    setTimeout(function () {
      playE();
    }, 500 + i);
  }

  for (let i = 10000; i < 10500; i += 250) {
    setTimeout(function () {
      playE();
    }, 500 + i);
  }

  setTimeout(function () {
    playE();
  }, 10500);

  setTimeout(function () {
    playD();
  }, 11000);

  setTimeout(function () {
    playD();
  }, 11500);

  setTimeout(function () {
    playE();
  }, 12000);

  setTimeout(function () {
    playD();
  }, 12500);

  setTimeout(function () {
    playC();
  }, 13000);

  setTimeout(function () {
    playG();
  }, 14000);
});
