function about_div() {
  document.getElementById("about-div").style.display = "block";
  document.getElementById("development-div").style.display = "none";
  document.getElementById("jukebox-div").style.display = "none";

  document.getElementById("about").style.color = "orangered";
  document.getElementById("my-work").style.color = "white";
  document.getElementById("jukebox").style.color = "white";
}

function my_work_div() {
  document.getElementById("about-div").style.display = "none";
  document.getElementById("development-div").style.display = "block";
  document.getElementById("jukebox-div").style.display = "none";

  document.getElementById("about").style.color = "white";
  document.getElementById("my-work").style.color = "orangered";
  document.getElementById("jukebox").style.color = "white";
}

function jukebox_div() {
  document.getElementById("about-div").style.display = "none";
  document.getElementById("development-div").style.display = "none";
  document.getElementById("jukebox-div").style.display = "block";

  document.getElementById("about").style.color = "white";
  document.getElementById("my-work").style.color = "white";
  document.getElementById("jukebox").style.color = "orangered";
}

function nav_collapse() {
  var x = document.getElementById("Topnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

function play(audioid) {
  var audio = document.getElementById(audioid);
  audio.play();
}

function stop(audioid) {
  var audio = document.getElementById(audioid);
  audio.pause();
}
