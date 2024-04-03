// RGB Colors
//variables
var preview = document.getElementById("previewBtn");
var display = document.getElementById("display");
var rgbText = document.getElementById("rgbText");
var whiteBtn = document.getElementById("whiteBtn");
var blackBtn = document.getElementById("blackBtn");

//listeners

preview.addEventListener("click", displayRGB);
whiteBtn.addEventListener("click", displayWhite);
blackBtn.addEventListener("click", displayBlack);

//functions

//rgb
function displayRGB() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var rgb = `rgb(${red},${green},${blue})`;

  display.style.background = rgb;
  rgbText.innerHTML = rgb;
}

//white
function displayWhite() {
  var white = "rgb(255,255,255)";
  var whiteText = "white - rgb(255,255,255)";

  display.style.background = white;
  rgbText.innerHTML = whiteText;
}

//black
function displayBlack() {
  var black = "rgb(0,0,0)";
  var blackText = "black - rgb(0,0,0)";

  display.style.background = black;
  rgbText.innerHTML = blackText;
}
