function shoShuttle (x: number, y: number) {
    led.plotBrightness(x, y, 200)
}
function clrShuttle (x: number, y: number) {
    led.plotBrightness(x, y, 0)
}
let sx = 0
let sy = 4
shoShuttle(sx, sy)
let speed = 0
basic.forever(function () {
	
})
