input.onButtonPressed(Button.A, function () {
    clrShuttle(sx, sy)
    sy = sy - 1
    if (0 > sy) {
        sy = 0
    }
    shoShuttle(sx, sy)
})
function doShift () {
    clrShuttle(sx, sy)
    for (let xx = 0; xx <= 3; xx++) {
        for (let yy = 0; yy <= 4; yy++) {
            led.plotBrightness(xx, yy, led.pointBrightness(xx + 1, yy))
        }
    }
    if (0 == ent % 5) {
        ent = 0
        led.plotBrightness(3, 0, 237)
    }
    shoShuttle(sx, sy)
    ent += 1
}
function shoShuttle (x: number, y: number) {
    led.plotBrightness(x, y, 200)
}
input.onButtonPressed(Button.B, function () {
    clrShuttle(sx, sy)
    sy = sy + 1
    if (4 < sy) {
        sy = 4
    }
    shoShuttle(sx, sy)
})
function mkStars () {
    for (let index = 0; index <= 4; index++) {
        led.unplot(4, index)
    }
    led.plotBrightness(4, randint(1, 3), 66)
}
function clrShuttle (x: number, y: number) {
    led.plotBrightness(x, y, 0)
}
let ent = 0
let sy = 0
let sx = 0
sx = 1
sy = 4
shoShuttle(sx, sy)
let speed = 0
ent = 0
led.plotBrightness(4, 0, 237)
basic.forever(function () {
    doShift()
    mkStars()
    basic.pause(100 + 250 * sy)
})
