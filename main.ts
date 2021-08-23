input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 255)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 255)
})
DFRobotMaqueenPlus.I2CInit()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
