function mover () {
    servos.P1.setAngle(15)
    servos.P0.setAngle(90)
    basic.pause(1000)
    reset()
}
function reset () {
    servos.P0.setAngle(0)
    servos.P1.setAngle(0)
}
mover()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.setAngle(0)
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index <= 4; index++) {
            servos.P1.setAngle(30 * index)
            basic.pause(1000)
        }
        reset()
    }
})
