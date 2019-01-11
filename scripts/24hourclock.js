
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

const radius = 12;
var x = 50;
var y = 50;

function canvasDraw() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	ctx.fillStyle = "white";
	ctx.fill();
}
canvasDraw();
var swap = true;
canvas.onclick = function() {
	if (swap) {
		document.addEventListener("mousemove", updatePosition, false);
		swap = false;
	}
	else {
		document.removeEventListener("mousemove", updatePosition, false);
		swap = true;
	}

};


var animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (!animation) {
    animation = requestAnimationFrame(function() {
      animation = null;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvasDraw();
    });
  }
}
