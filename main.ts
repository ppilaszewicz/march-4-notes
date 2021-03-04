let random = false
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    random = Math.randomBoolean()
    if (random == true) {
        basic.showString("T")
    } else {
        basic.showString("F")
    }
})
basic.forever(function () {
	
})
