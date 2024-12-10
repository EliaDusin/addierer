let Number_1 = 0
let Number_2 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Number_1 += 1
        basic.showNumber(Number_1)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Number_2 += 1
        basic.showNumber(Number_2)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(Number_1 + Number_2)
        Number_1 = 0
        Number_2 = 0
    }
})
