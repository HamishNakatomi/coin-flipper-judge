input.onButtonPressed(Button.A, function () {
    flip_count = 0
    count = 0
    if (start == 0) {
        start = 1
        radio.sendValue("start", 1)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(flip_count)
})
radio.onReceivedValue(function (name, value) {
    flip_count += value
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
})
let start = 0
let count = 0
let flip_count = 0
radio.setGroup(10)
radio.setTransmitPower(7)
loops.everyInterval(1000, function () {
    if (start) {
        if (count < 30) {
            count += 1
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
        } else {
            radio.sendValue("start", 0)
            start = 0
            music.playTone(392, music.beat(BeatFraction.Breve))
        }
    }
})
