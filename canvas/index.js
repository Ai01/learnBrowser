var canvas = document.getElementById('foo');
var ctx = canvas.getContext('2d');

// 长方形
const drawRect = () => {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
};

// 路径
const drawPath = () => {
  ctx.beginPath();
  ctx.moveTo(75 * 2, 50 * 2);
  ctx.lineTo(100 * 2, 75 * 2);
  ctx.lineTo(100 * 2, 25 * 2);
  ctx.lineTo(75 * 2, 50 * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
};

// 圆弧
const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
  ctx.stroke();
  ctx.closePath();
};

// 贝赛尔曲线
const drawQuadraticCurveTo = () => {
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
};

// 填色
const drawBezierCurveTo = () => {
  ctx.beginPath();
  ctx.moveTo(75,40);
  ctx.bezierCurveTo(75,37,70,25,50,25);
  ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
  ctx.bezierCurveTo(20,80,40,102,75,120);
  ctx.bezierCurveTo(110,102,130,80,130,62.5);
  ctx.bezierCurveTo(130,62.5,130,25,100,25);
  ctx.bezierCurveTo(85,25,75,37,75,40);
  ctx.fill();
};

const drawRainBowRect = () => {
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0, 112.5, 150, 37.5);

  // 画半透明矩形
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')';
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
    }
  }
};

// 线性渐变
const drawLinearGradient = () => {
  const lineargradient = ctx.createLinearGradient(0,0,150,150);
  lineargradient.addColorStop(0,'white');
  lineargradient.addColorStop(1,'black');

  ctx.strokeStyle= lineargradient;
  ctx.beginPath();
  ctx.moveTo(10,10);
  ctx.lineTo(50,50);
  ctx.stroke();
  ctx.closePath();

  ctx.fillStyle = lineargradient;
  ctx.fillRect(50,50,50,50);
};

drawLinearGradient();
