# Calliope-Tischfeuerwerk
## ~avatar avatar @unplugged
Diesmal benötigst du einen Calliope mini und adressierbare RGB-LEDs. <br>
Diese LEDs findest du entweder unter dem Namen [Neopixel](https://www.google.com/search?q=neopixel+band&rlz=1C1CHBD_deDE928DE928&oq=neopi&aqs=chrome.0.69i59l3j69i57j0j69i60l3.1887j0j9&sourceid=chrome&ie=UTF-8) oder [ws2812b](https://www.ebay.de/sch/i.html?_nkw=ws2812b&_dcat=116022&_sacat=-1&vbn_id=7005777392&LH_PrefLoc=1&_fsrp=1&_sop=15). Ich empfehle einfach ein ws2812b RGB-LED-Band von 5m Länge (damit kannst du viel anfangen)! <br>
![Vorschau](https://github.com/macim0/sylvester-mini/blob/master/sylvester-mini.gif?raw=true)

## ~ @unplugged
Jetzt musst du noch die Kabel an den Calliope anschließen. Dazu kannst du die Kabelenden durch die goldenen Löcher stecken und um den Kreis wickeln.<br>
- plus(+5V), also das rote Kabel, an plus (+) vom Calliope anschließen, <br>
- minus(GND), also das schwarze Kabel, an minus (-) vom Calliope anschließen, <br>
- das gelbe Signalkabel (Din) an den Pin 1 (1) vom Calliope anschließen. <br>

![bild Anschlüsse](https://github.com/r00b1nh00d/NeopixelWeihnachtsstern/blob/master/Anschluss.jpg?raw=true)

## Schritt 1
``||basic: beim Start||`` musst du dem Calliope sagen, wo du den LED-Streifen angeschlossen hast. Erstelle dazu eine Variable ``||variables: strip||``.Speichere dies, indem du den Block ``||neopixel.strip:Neopixel an Pin P0 mit 24 Pixeln und Modus RGB||`` in den Block ``||variables: setze auf|`` schiebst. Hier stellst du ein, dass der Neopixel am Pin P1 angeschlossen ist und wie viele LEDs du für deinen Raketenstart benutzen willst. <br>
Das hintere Feld mit dem RGB-Format ist erstmal uninteressant (du brauchst es nur, sollten bei deinen LEDs die Farben vertauscht sein, z.B. grün leuchten, aber rot programmiert sein). Ich habe für den Startbereich 6 LEDs benötigt. <br>
**Hinweis: Wenn die Töne stören, dann klickt auf der linken Seite unter dem Calliope auf den Lautsprecher, dann wird es stumm geschaltet.**
```blocks
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
``` 

## Schritt 2
Für den Start müssen wir eine LED anschalten, die später (im nächsten Schritt) bis zum Ende des Streifens durchläuft. Das ganze sollte sich dauerhaft wiederholen.<br>
Dazu habe ich die erste LED auf meinem Streifen Orange mit ``||neopixel.strip:setze Farbe von NeoPixel 0 auf rot||`` angeschalten. <br>
**Hinweis:** Wenn du eine Veränderung am Neopixel anzeigen möchtest, brauchst du auch immer den Block ``||neopixel.strip:anzeigen||``.

```blocks
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)

basic.forever(function () {
    strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
})
```
## Schritt 3
Nun wollen wir die Rakete mal abheben lassen. Die LED muss sich also bewegen (auf dem Streifen verschieben). Um es bis zum Ende des Streifens zu schaffen, benöten wir 6 Runden. <br>
Um das zu machen benötigen wir zuerste eine Schleife ``||loops:index Schleife||``. In dieses Schleife kommen die Blöcke ``||basic:pausiere||``, ``||neopixel.strip:verschiebe||`` und ``||neopixel.strip:anzeigen||``. <br>
Außerdem müssen wir die LED auf dem Calliope noch einmal kurz an und wieder ausschalten in dem wir ``||basic:setze RGB-LED-Farbe auf||`` auf Orange und nach einer Pause wieder auf Schwarz stellen. 

```blocks
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)

basic.forever(function () {
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
})
```

## Schritt 4
Abschließend müssen wir noch das Feuerwerk auf dem Display anzeigen. Dies geht ganz einfach, indem ihr es mit dem Block ``||basic:zeige LEDs||`` baut. <br>
Außerdem kannst du die Explosion der Raktet noch mit einem Ton darstellen. Hierfür benötigst du den Block ``||music:spiele Note Mittleres C für 1 Schlag||``. <br>
Nach Ende der Explosion solltest du alle LEDs auf dem Display ausschalten. Dies kannst du entweder mit einem leeren ``||basic:zeige LEDs||`` oder mit ``||basic:Bildschirm löschen||`` machen.<br>
**Wenn du verschiedene Bilder hintereinander setzt, entsteht eine Animation.**

```blocks
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)

basic.forever(function () {
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
})
```

