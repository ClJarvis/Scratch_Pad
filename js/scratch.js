const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * .80;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'white';
ctx.lineJoin = 'square';
ctx.lineCap = 'square';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `#47476B`; //E0E0EB
  ctx.beginPath();
  ctx.lineWidth=1; //was 5
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];


 // if(ctx.lineWidth >= 100 || ctx.lineWidth <=1) {
  //  direction = !direction;
//  }
  if(direction){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
// TRYING TO GET SINGLE LINE
//canvas.addEventListener('mousedown', () => isDrawing = true);

  canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  });

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
