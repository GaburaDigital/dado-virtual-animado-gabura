input.onButtonPressed(Button.A, function () {
    rolar_o_dado()
})
function rolar_o_dado () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    for (let índice = 0; índice <= 5; índice++) {
        dados_desenhos[índice].showImage(0, 200)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("C D E F E D C - ", 500)
    dados_desenhos[randint(0, 5)].showImage(0)
}
let dados_desenhos: Image[] = []
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
dados_desenhos = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . . . # .
    . . . . .
    . # . . .
    . . . . .
    `),
images.createImage(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
]
