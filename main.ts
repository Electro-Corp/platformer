function check () {
	
}
input.onButtonPressed(Button.A, function () {
    x += -1
    for (let index = 0; index < _1.length; index++) {
        if (y == 3 && !(_1[count] == y - 1)) {
            yeaornah = 1
        }
        if (yeaornah == 1) {
            Player.delete()
            y = 3
            x = 0
            music.playMelody("B G D C C - - - ", 120)
        }
        count += 1
    }
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    y += -1
    basic.pause(500)
    y += 1
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (y == 3 && !(_1[count] == y - 1)) {
        yeaornah = 1
    }
    if (yeaornah == 1) {
        Player.delete()
        music.playMelody("B G D C C - - - ", 120)
        y = 3
        x = 0
    }
    count += 1
    basic.pause(100)
})
let leveldisplaylol: game.LedSprite = null
let current = ""
let Player: game.LedSprite = null
let yeaornah = 0
let count = 0
let x = 0
let y = 0
let _1: number[] = []
let Level = 1
_1 = [0, 2, 4]
let _12 = [4, 4, 4]
let LevelComplete = 0
y = 3
x = 0
basic.forever(function () {
	
})
basic.forever(function () {
    count = 0
    current = "" + Level + ("." + 2)
    for (let index = 0; index < _1.length; index++) {
        leveldisplaylol = game.createSprite(_1[count], _12[count])
        count += 1
    }
    while (0 == 0) {
        count = 0
        yeaornah = 0
        check()
        if (yeaornah == 1) {
            Player.delete()
            music.playMelody("B G D C C - - - ", 120)
            y = 3
            x = 0
        }
        Player = game.createSprite(x, y)
        basic.pause(100)
        Player.delete()
    }
    Level += 1
})
