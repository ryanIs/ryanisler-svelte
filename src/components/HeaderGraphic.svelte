<script lang="ts">
  import { onMount } from "svelte"
  let canvasRef

  let ctx

  let winWidth = 1500
  let winHeight = 140

  let canvasWidth = 1500
  let canvasHeight = 140


  function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = window.document.documentElement.clientWidth;
    var h = window.document.documentElement.clientHeight;
    canvasWidth = winWidth = w
    
    // Display result inside a div element
    // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
  }
  displayWindowSize()


  const random = (maxInt: number) => Math.round(maxInt * Math.random())
  let mouseX = 0, mouseY = 0

  const mouseMoveHandler = (e) => {
    // mouseX = parseInt(e.clientX - offsetX);
    // mouseY = parseInt(e.clientY - offsetY);
    e.preventDefault();
    e.stopPropagation();

    mouseX = parseInt(e.clientX);
    mouseY = parseInt(e.clientY);
    // console.log(mouseX)
  }

  let radialRGB
  let gotoRadialRGB

  const canvasClickHandler = (e) => {
    radialRGB =  {
                r: 122 + random(120),
                g: 122 + random(120),
                b: 122 + random(120),
              }
  }

  onMount(() => {

    // let mouseX = 0,s mouseY = 0

    // const mouseMoveHandler = (e) => {
    //   // mouseX = parseInt(e.clientX - offsetX);
    //   // mouseY = parseInt(e.clientY - offsetY);
      
    //   mouseX = parseInt(e.clientX);
    //   mouseY = parseInt(e.clientY);
    //   console.log(mouseX)
    // }

    window.addEventListener("resize", displayWindowSize);
    window.addEventListener("mousemove", mouseMoveHandler, false);

     radialRGB = {r: 240, g: 240, b: 240}
    // gotoRadialRGB = {r: 240, g: 240, b: 240}
    gotoRadialRGB = {r: 100, g: 100, b: 240}

    ctx = canvasRef.getContext("2d")

    var canvasOffset = canvasRef.getBoundingClientRect();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;

    let items = []
    let maxItems = 100

    // let gravity = { x: 0, y: 0.1 }
    let gravity = { x: 0, y: 0.01 }
    let ground = ctx.canvas.height // ground at bottom of canvas.
    let bounce = 0.3

    const newItem = (
      newPos = { x: 0, y: 0 },
      newSize = { w: 10, h: 10 },
      newVel = { x: 0, y: 0 },
      newCol = { r: 50, g: 50, b: 50 }
    ) => {
      let item = {
        pos: newPos, // position
        startPos: newPos, // position
        vel: newVel, // velocity
        startVel: newVel, // velocity
        gotoPos: {x: 0, y: 0},
        // vel: {x: 20, y: 0}, // velocity
        size: newSize, // velocity
        myGround: ground - (newSize.h - 150) - random(50),
        col: `rgb(${newCol.r}, ${newCol.g}, ${newCol.b})`,
        update() {
          // ctx.fillStyle = "rgb(" + this.gray + ", " + this.gray + "," + this.gray + ")";

          // createRadialGradient(x0, y0, r0, x1, y1, r1)
          // let gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);
          let gradient = ctx.createRadialGradient(this.pos.x, 90, 30, this.pos.x - 10, this.vel.y * 90, 70);
          // Add three color stops
          // gradient.addColorStop(0, "#f0f0f0");
          // gradient.addColorStop(0.9, "#fafafa");
          // gradient.addColorStop(0, "#fafa05");
          // gradient.addColorStop(0, "#ddd"); // cool with white other
          // gradient.addColorStop(0, "#eee");
          gradient.addColorStop(0, "rgb(" + radialRGB.r + ", " + radialRGB.g + "," + radialRGB.b + ")");
          gradient.addColorStop(1, "#fff");
          // gradient.addColorStop(1, "#f00");

          // Set the fill style and draw a rectangle
          ctx.fillStyle = gradient;

          // ctx.fillStyle = this.col
          // ctx.fillStyle = this.col

          // ctx.rotate(Math.PI / 2)
          ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h)

          this.vel.x += gravity.x
          this.vel.y += gravity.y
          this.pos.x += this.vel.x
          this.pos.y += this.vel.y
          // const g = ground - this.size.h; // adjust for size
          const g = this.myGround
          if (this.pos.y >= g) {
            this.pos.y = g - (this.pos.y - g) //
            this.vel.y = -Math.abs(this.vel.y) * bounce // change velocity to moving away.

            this.gotoPos.x = random(canvasWidth)
            this.vel.x += ( (this.gotoPos.x - this.pos.x) / 1000) // slooowly moves to right
            // this.vel.x += ( this.gotoPos.x - this.pos.x / 1000) // stays at left
            if(random(10) == 0) {
              if(radialRGB.r < gotoRadialRGB.r) radialRGB.r ++
              else if(radialRGB.r > gotoRadialRGB.r) radialRGB.r--
              if(radialRGB.g < gotoRadialRGB.g) radialRGB.g ++
              else if(radialRGB.g > gotoRadialRGB.g) radialRGB.g--
              if(radialRGB.b < gotoRadialRGB.b) radialRGB.b ++
              else if(radialRGB.b > gotoRadialRGB.b) radialRGB.b--
              // radialRGB.r += Math.ceil( (radialRGB.r - gotoRadialRGB.r) / 256)
              // radialRGB.g += Math.ceil((radialRGB.g - gotoRadialRGB.g) / 256)
              // radialRGB.b += Math.ceil((radialRGB.b - gotoRadialRGB.b) / 256)
              // radialRGB.b--;
            }
            if(random(1000) == 0) {
              gotoRadialRGB = {
                r: 122 + random(120),
                g: 122 + random(120),
                b: 122 + random(120),
              }
            }

            //

          } // end posy > g
          if (this.pos.y < 0) {
            this.vel.y = 2
          }

          // random effect
          if(this.vel.x > 0) this.vel.x -= 0.25
          if(this.vel.x < 0) this.vel.x += 0.25
          
          if(this.vel.x > 20) {
              this.vel.x--
            }
            
          if(this.vel.x < -20) {
              this.vel.x++
            }

          if(this.pos.x > canvasWidth) {
              this.vel.x = -this.vel.x
              this.pos.x = canvasWidth
            }

            if(this.pos.x < 0) {
              this.vel.x = random(15)
              this.pos.x = 0
            }


            // mouse effect

            // note working?? (they should be moving away from mouse... preferably at random when ground hit..)
            // console.log('mouseX: ' + mouseX)
            // console.log('mouseX: ' + this.pos.x)
            // if(this.pos.x > mouseX + 15 && this.pos.x < mouseX - 15 && mouseY < 200) {
            // if(this.pos.x > mouseX + 30 && this.pos.x < mouseX - 20) {
            //   this.vel.x += 20
            //   // console.log(1390531)
            //   // this.vel.x -= 10
            //   // this.vel.x -= 1
            //   // this.vel.x -= 0.01
            // }
        },
        reset() {
          // this.pos = this.startPos
          // this.pos = Object.assign(this.startPos, {})
          // this.pos = {x: random(100), y: 0}
          // this.vel.y -= 5
          this.vel.y -= random(3)
        },
      }

      items.push(item)
    }
    // Create items
    for (let i = 0; i < maxItems; i++) {
      // newItem({x: random(winWidth), y: random(20)} )
    let _myGray = 250 - random(20)
      newItem(
        { x: random(winWidth), y: 0 },
        { w: 40, h: 40 },
        // { x: 0, y: 0 },
        { x: 5 + random(320), y: 0 },
        // { r: random(120) + 120, g: random(120) + 120, b: random(120) + 120 }
        { r: _myGray, g: _myGray, b: _myGray }
      )
    }
    // console.log(items)

    setTimeout( () => {


    setInterval(() => {
      ctx.clearRect(0, 0, 9999, 9999)

      for (let i = 0; i < items.length; i++) {
        const myItem = items[i]
        myItem.update()

        if (random(100) == 5) {
          myItem.reset()
        }
      }
      // item.update()
    }, 20)

  }, 700)

    // todo: if not in scroll height, pause the interval; may be cpu intensive.
  })
</script>

<div class="header-wrapper">
  <h1 class="uk-margin uk-text-center">RYAN ISLER</h1>
  <div class="canvas-wrapper">
    <canvas bind:this={canvasRef} width={canvasWidth} height={canvasHeight} 
      on:mousemove={mouseMoveHandler}
      on:click={canvasClickHandler}
    />
  </div>
</div>

<style>
  .canvas-wrapper {
    /* width: 100vw; */
    /* height: 300px; */
    /* border-radius: 0 0 50px 200px; */
    background: #ddd;
    /* background: radial-gradient(#fff, #fafafa); */
    background: linear-gradient(#fafafa, #fff);

    border-bottom: 1px solid #fafafa;
    opacity: 0.5;

    min-height: 140px;
    /* cursor: url(https://freesvg.org/storage/img/thumb/1667813725motorcycle-parts-shop-logo-concept.png) 4 5; */
    /* cursor: crosshair; */

    transition: opacity 0.5s;
    animation: canvasIntro 3s;
  }

  .canvas-wrapper:hover {
    opacity: 1.0
  }

  canvas {
    min-height: 140px;
  }
  
  @keyframes canvasIntro {
    0% {
      opacity: 0.0;
    }
    20% {
      opacity: 0.0;
    }
    100% {
      opacity: 0.5;
    }
  }

  h1 {
    display: block;
    width: 100%;
    position: absolute;
    top: 55px;
    z-index: 15;
    color: #444;

    animation: ryanIntro 3s;

    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
  }

  
  
  @keyframes ryanIntro {
    0% {
      top: -40px;
      opacity: 0.0;
    }
    50% {
      top: 0;
      opacity: 0.0;
    }
    100% {
      top: 55px;
      opacity: 0.8;
    }
  }
</style>
