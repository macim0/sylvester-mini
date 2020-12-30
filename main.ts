let strip = neopixel.create(DigitalPin.C16, 6, NeoPixelMode.RGB)
basic.forever(function () {
    let Index = 0
    strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    for (let index = 0; index < 6; index++) {
        basic.pause(200)
        strip.shift(1)
        strip.show()
    }
    basic.setLedColor(0xff8000)
    basic.pause(200)
    basic.setLedColor(0x000000)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
