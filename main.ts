while (true) {
    servos.P0.setAngle(0)
    basic.pause(1000)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # # #
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(45)
    basic.pause(1000)
    basic.showLeds(`
    . . . . #
    . . . # .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(90)
    basic.pause(1000)
    basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(135)
    basic.pause(1000)
    basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(180)
    basic.pause(1000)
    basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(135)
    basic.pause(1000)
    basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(90)
    basic.pause(1000)
    basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(45)
    basic.pause(1000)
    basic.showLeds(`
    . . . . #
    . . . # .
    . . # . .
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
    servos.P0.setAngle(0)
    basic.pause(1000)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # # #
    . . . . .
    . . . . .
    `)
    basic.pause(1000)
}
