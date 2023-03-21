function moveServo (startAngle: number, targetAngle: number, delay: number) {
    for (let index = 0; index <= Math.abs(targetAngle - startAngle); index++) {
        if (targetAngle >= startAngle) {
            pins.servoWritePin(AnalogPin.P0, startAngle + index)
        } else {
            pins.servoWritePin(AnalogPin.P0, startAngle - index)
        }
        basic.pause(delay)
    }
}
input.onButtonPressed(Button.A, function () {
    moveServo(10, 90, 20)
})
input.onButtonPressed(Button.B, function () {
    moveServo(90, 10, 20)
})
basic.forever(function () {
	
})
