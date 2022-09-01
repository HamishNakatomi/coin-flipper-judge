input.onButtonPressed(Button.A, function () {
    if (start == 0) {
        radio.sendValue("start", 1)
        count = 0
        start = 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
radio.onReceivedValue(function (name, value) {
    count += value
})
let count = 0
let start = 0
radio.setGroup(10)
loops.everyInterval(1000, function () {
    if (start) {
        if (count < 10) {
            count += 1
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
        } else {
            radio.sendValue("start", 0)
            start = 0
            music.playTone(392, music.beat(BeatFraction.Breve))
        }
    }
})
