input.onButtonPressed(Button.B, function () {
	
})
pins.servoWritePin(AnalogPin.P0, 0)
let rotation = 0
basic.forever(function () {
    while (rotation < 220) {
        rotation = rotation + 1
        pins.servoWritePin(AnalogPin.P0, rotation)
        basic.pause(20)
    }
    while (rotation > 0) {
        rotation = rotation - 1
        pins.servoWritePin(AnalogPin.P0, rotation)
        basic.pause(20)
    }
})
