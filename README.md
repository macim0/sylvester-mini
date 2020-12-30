# Neopixel-Weihnachtsstern
## ~avatar avatar @unplugged
![Vorschau](https://github.com/macim0/sylvester-mini/blob/master/sylvester-mini.gif?raw=true) <br>
Diesmal benötigst du einen Calliope mini und adressierbare RGB-LED's. <br>
Diese LED's findest du entweder unter dem Namen [Neopixel](https://www.google.com/search?q=neopixel+band&rlz=1C1CHBD_deDE928DE928&oq=neopi&aqs=chrome.0.69i59l3j69i57j0j69i60l3.1887j0j9&sourceid=chrome&ie=UTF-8) oder [ws2812b](https://www.ebay.de/sch/i.html?_nkw=ws2812b&_dcat=116022&_sacat=-1&vbn_id=7005777392&LH_PrefLoc=1&_fsrp=1&_sop=15). Ich empfehle einfach ein ws2812b RGB-LED-Band von 5m Länge (damit kannst du viel anfangen)! 

## ~ @unplugged
Jetzt musst du noch die Kabel an den Calliope anschließen. Dazu kannst du die Kabelenden durch die goldenen Löcher stecken und um den Kreis wicheln.<br>
- plus(+5V), also das rote Kabel, an plus (+) vom Calliope anschließen, <br>
- minus(GND), also das schwarze Kabel, an minus (-) vom Calliope anschließen, <br>
- das gelbe Signalkabel (Din) an den Pin 1 (1) vom Calliope anschließen. <br>

## Schritt 1
``||basic: beim Start||`` musst du dem Calliope sagen, wo du die LED-Streifen angeschlossen hast. Erstelle dazu eine Variable ``||variables: strip||``.Speichere dies, indem du den Block ``||neopixel.strip:Neopixel at Pin P0 With 24 Leds||`` in den Block ``||variables: setze auf|`` schiebst. Hier stellst du ein, dass der Neopixel am Pin P1 angeschlossen ist und wie viele LED's du für deinen Raketenstart benutzt willst. <br>
Das hintere Feld mit dem RGB-Format ist erstmal uninteressant (du brauchst es nur, sollten bei deinen LED's die Farben vertauscht sein, z.B. grün leuchten, aber rot programmiert sein) <br>
Ich habe für den Startbereich 6 LED's benötigt.
```blocks
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)

``` 

## Schritt 2
Für den Start müssen wir eine LED anschalten die dann bis zum Ende des Streifens durchläft. <br>
Das ganze sollte sich dauerhaft wiederholen.<br>
Dazu habe ich die erste LED auf meinem Streifen Orange angeschalten.
**Hinweis:** Wenn du eine Veränderung am Neopixel anzeigen möchtest, brauchst du auch immer den Block ``||neopixel.strip:anzeigen||``

```block
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)

basic.forever(function () {
    strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
})
```
## Schritt 3
Nun wollen wir die Rakete mal abheben lassen. Die LED muss sich also bewegen (auf dem Streifen verschieben). Um es bis zum Ende des Streifens zu schaffen benöten wir 6 Runden. <br>
Um das zu machen benötigen wir zuerste eine Schleife ``||loops:index Schleife||``. In dieses Schleife kommen die Blöcke ``||basic:pausiere||``, ``||neopixel.strip:shift||`` und ``||neopixel.strip:anzeigen||``. <br>
Außerdem müssen wir die LED auf dem Calliope noch einmal kurz an und wieder ausschalten in dem wir ``||basic:setLedColor||`` auf Orange und nach einer Pause wieder auf Schwarz stellen.
**Falls dir der Block zum rotieren noch nicht angezeigt wird kannst du auf "Fertigstellen" klicken, in der folgenden Ansicht sind dieser und weitere Blöcke dann auch verfügbar. Z.B. kannst du dann auch den Stern einfach in allen Regenbogenfarben leuchten lassen, wie es am Anfang dieses Tutorials gezeigt wurde**

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
})
```

## Schritt 4
Abschließend müssen wir noch das Feuerwerk auf dem Display anzeigen. Dies geht ganz einfach indem ihr es mit dem Block ``||basic:showLeds||`` baut. <br>
Außerdem kannst du die Explosion der Raktet noch mit einem Ton darstellen hierfür benötigst du den Block ``||music:playTone||``. <br>
Nach Ende der Explosion solltest du alle LEDs auf dem Display ausschalten. Dies kannst du entweder mit einem leeren ``||basic:showLeds||`` oder mit ``||basic:clearScreen||`` machen.
**Wenn du verschiedene Bilder hintereinander setzt, entsteht eine Animation**

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


> Diese Seite bei [https://macim0.github.io/sylvester-mini/](https://macim0.github.io/sylvester-mini/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/macim0/sylvester-mini** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/macim0/sylvester-mini/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/macim0/sylvester-mini** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/macim0/sylvester-mini/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
