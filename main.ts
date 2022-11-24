function blanc () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
let _1 = 0
basic.forever(function () {
    _1 = pins.digitalReadPin(DigitalPin.P0)
    if (_1 >= 551) {
        vert()
    } else if (_1 <= 449) {
        rouge()
    } else {
        blanc()
    }
})
