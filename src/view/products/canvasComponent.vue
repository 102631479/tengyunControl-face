<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-11-03 10:07:47
 * @LastEditors: huangfu
 * @LastEditTime: 2020-11-17 15:00:09
-->
<template>
  <div class="canvas">
    <canvas id="myCanvas4" width="530" height="386"></canvas>
  </div>
</template>

<script>
let canvas;
let context;
let RADIUS = Math.PI * 2;
let WIDTH = 530;
let HEIGHT = 386;

let width = 530; //画布宽度
let height = 386; //画布高度

let fPoints = [
  { x: 265, y: 420, r: 1.5 },
  { x: 265, y: 420, r: 1.5 },
  { x: 75, y: 0, r: 2 },
  { x: 455, y: 0, r: 2 },
  { x: 455, y: 0, r: 2 },
]; //初始点坐标

let NB_POINT = 20000;
let ANGLE_STEP = 360 / NB_POINT;
let CENTER_X = WIDTH / 2;
let CENTER_Y = HEIGHT / 2;
let r = 1.5;
let y = 0;
let x = 0;
let angle = ANGLE_STEP;

export default {
  mounted() {
    this.drawCanvas4();
  },
  methods: {
    // initCanvas() {
    //   console.log("初始化canvas")
    //   canvas = document.getElementById('canvas');
    //   ctx = canvas.getContext('2d');
    // },
    update() {
      // this.renderCircle(1.5, HEIGHT * 0.5, "rgba(155, 89, 182,1.0)");
      // this.renderCircle(1.5, HEIGHT * 0.4, "rgba(52, 152, 219,1.0)");
      this.renderCircle(1.5, HEIGHT * 0.3, "rgba(52, 152, 219,1.0)");
      // this.renderCircle(1.5, HEIGHT * 0.2, "rgba(46, 204, 113,1.0)");
      // this.renderCircle(1.5, HEIGHT * 0.1, "rgba(231, 76, 60,1.0)");

      angle += ANGLE_STEP;
      if (angle > RADIUS) {
        angle = 0;
      }
      context.fillStyle = "rgba(44, 62, 80,0)";
      context.fillRect(0, 0, WIDTH, HEIGHT);
      // requestAnimationFrame(this.update);
    },
    renderCircle(r, _r, color) {
      // r: 半径   _r: 环绕半径 color: 颜色
      x = r + _r * Math.cos(angle) + CENTER_X; //圆心横坐标 CENTER_X
      y = r + _r * Math.sin(angle) + CENTER_Y; //圆心纵坐标 CENTER_Y
      context.fillStyle = color;

      context.beginPath();
      context.arc(x, y, r, 0, RADIUS);
      context.fill();
      context.closePath();
    },

    render() {
      //默认值为source-over
      if (!context) {
        return;
      }
      let prev = context.globalCompositeOperation;
      //只显示canvas上原图像的重叠部分
      context.globalCompositeOperation = "destination-in";
      //设置主canvas的绘制透明度
      context.globalAlpha = 0.9;
      //这一步目的是将canvas上的图像变的透明
      context.fillRect(0, 0, width, height);

      //在原图像上重叠新图像
      context.globalCompositeOperation = prev;
      //在主canvas上画新圆
      this.update();
      this.drawCircle();
      if (width !== 0) {
        //在动画没有结束前，递归渲染
        window.requestAnimationFrame(this.render);
      }
    },
    drawCircle() {
      for (let i = 0; i < fPoints.length; i++) {
        context.lineWidth = 0; //线条宽度-空心圆
        // context.strokeStyle = 'rgba(2, 179, 253,0.02)'; //颜色
        context.shadowBlur = 0; // 设置或返回用于阴影的颜色
        context.shadowColor = "rgba(2, 179, 253,1)"; // 设置或返回用于阴影的模糊级别
        context.fillStyle = "rgba(2, 179, 253,1)"; //填充颜色-实心圆
        context.fill(); //画实心圆
        context.beginPath();
        context.arc(fPoints[i].x, fPoints[i].y, fPoints[i].r, 0, Math.PI * 2);
        context.closePath();
      }

      if (fPoints[0].y > 275) {
        fPoints[0].x -= 2;
        fPoints[0].y -= 1.2;
        fPoints[1].x += 2;
        fPoints[1].y -= 1.2;
      } else if (fPoints[0].y > 0) {
        fPoints[0].y -= 2.5;
        fPoints[1].y -= 2.5;
      } else if (fPoints[0].y < 0) {
        fPoints = [
          { x: 265, y: 420, r: 1.5 },
          { x: 265, y: 420, r: 1.5 },
          { x: 75, y: 0, r: 2 },
          { x: 455, y: 0, r: 2 },
          { x: 455, y: 0, r: 2 },
        ]; //初始点坐标
      }

      if (fPoints[2].y < 270) {
        fPoints[2].y += 2;
        fPoints[3].y += 2;
      } else if (fPoints[2].y < 389) {
        fPoints[2].x += 2;
        fPoints[2].y += 1.25;
        fPoints[3].x -= 2;
        fPoints[3].y += 1.25;
      }
    },
    drawCanvas4() {
      canvas = document.getElementById("myCanvas4");
      context = canvas.getContext("2d");

      // let fPoints = [{x: 302, y: 410,r:1.5}, {x: 302, y: 410,r:1.5}];//初始点坐标

      // function render() {
      //   //默认值为source-over
      //   let prev = context.globalCompositeOperation;
      //   //只显示canvas上原图像的重叠部分
      //   context.globalCompositeOperation = "destination-in";
      //   //设置主canvas的绘制透明度
      //   context.globalAlpha = 0.9;
      //   //这一步目的是将canvas上的图像变的透明
      //   context.fillRect(0, 0, width, height);

      //   //在原图像上重叠新图像
      //   context.globalCompositeOperation = prev;
      //   //在主canvas上画新圆
      //   drawCircle();
      //   if (width !== 0) {
      //     //在动画没有结束前，递归渲染
      //     window.requestAnimationFrame(render);
      //   }
      //   // this.update()
      // }
      window.requestAnimationFrame(this.render);
    },
  },
  beforeDestroy() {
    canvas = null;
    context = null;
  },
};
</script>

<style>
.canvas {
  position: absolute;
  margin-top: 96px;
  /* margin-right: 260px; */
  right: 0;
  bottom: -5px;
}
</style>