//cronometro
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
var func;


function timerstart(){
  func = setInterval( function(){
    $("#seconds").html(pad(++sec%60));
    $("#minutes").html(pad(parseInt(sec/60,10)));
  }, 1000);
}
timerstart();

function myStopFunction() {
  clearInterval(func);
}

function myClearFunction(){
  myStopFunction();
  $("#seconds").html(pad(00));
  $("#minutes").html(pad(00));
  sec = 0;
}

timerstart();

// Reproducir musica y pararla en cualquier momento
var audio = document.getElementById('audio');

var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
  } else { 
    count = 0;
    audio.pause();
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});