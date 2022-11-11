<script lang="ts">
  import { onMount } from "svelte"
  let canvasRef

  let ctx

  let winWidth = 1500
  let winHeight = 300

  let canvasWidth = 1500
  let canvasHeight = 300

  const random = (maxInt: number) => Math.round(maxInt * Math.random())

  onMount(() => {
    ctx = canvasRef.getContext("2d")

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
        // vel: {x: 20, y: 0}, // velocity
        size: newSize, // velocity
        myGround: ground - newSize.h - random(50),
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
          gradient.addColorStop(0, "#ff0000");
          gradient.addColorStop(1, "#000");

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
          }
          if (this.pos.y < 0) {
            this.vel.y = 2
          }
        },
        reset() {
          // this.pos = this.startPos
          // this.pos = Object.assign(this.startPos, {})
          // this.pos = {x: random(100), y: 0}
          // this.vel.y -= 5
          this.vel.y -= random(3)
          console.log(555)
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
        { w: 100, h: 100 },
        { x: 0, y: 0 },
        // { r: random(120) + 120, g: random(120) + 120, b: random(120) + 120 }
        { r: _myGray, g: _myGray, b: _myGray }
      )
    }
    console.log(items)

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
    }, 5)

    // todo: if not in scroll height, pause the interval; may be cpu intensive.
  })
</script>

<div class="header-wrapper">
  <div class="canvas-wrapper">
    <canvas bind:this={canvasRef} width={canvasWidth} height={canvasHeight} />
  </div>
</div>

<style>
  .canvas-wrapper {
    /* width: 100vw; */
    /* height: 300px; */
    border-radius: 0 0 50px 200px;

    border-bottom: 1px solid red;
  }
</style>
