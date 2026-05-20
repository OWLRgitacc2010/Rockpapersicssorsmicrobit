let tool = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    tool = randint(0, 2)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    if (tool == 0) {
        basic.showIcon(IconNames.Square)
        basic.pause(500)
    } else {
        if (tool == 1) {
            basic.showIcon(IconNames.Scissors)
            basic.pause(500)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
        }
    }
    basic.showString("Hello!")
})
basic.forever(function () {
	
})
