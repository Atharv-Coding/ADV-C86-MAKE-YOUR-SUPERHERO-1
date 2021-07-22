let canvas = new fabric.Canvas("canvas");

let playerX = 10;
let playerY = 10;

let blockImageWidth = 30;
let blockImageHeight = 30;

let playerObject = "";
let blockObject = "";

function playerUpdate() {
  fabric.Image.fromURL("player.png", function (img) {
    playerObject = img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(150);
    playerObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(playerObject);
  });
}
function blockUpdate(ImgSource) {
  fabric.Image.fromURL(ImgSource, function (img) {
    blockObject = img;
    blockObject.scaleToWidth(blockImageWidth);
    blockObject.scaleToHeight(blockImageHeight);
    blockObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(blockObject);
  });
}