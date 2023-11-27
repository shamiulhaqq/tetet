

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Touch_Lamp0
 */
//% weight=100 color=#0fbc11 icon=""
namespace Touch_Lamp {
    // Custom block for declaring a touchpad on a specific pin
    // Default pin is set to 0 (P0)
    // This block will return the pin number for the touchpad
    // Usage: let touchPin = declareTouchpad();
    //        basic.showNumber(touchPin);
    //        or use the returned value in other blocks/functions
    /**
     * Declare a touchpad on a specific pin.
     */
    //% block="Declare Touchpad"
    function declareTouchpad(): number {
        // Default pin for touchpad is P0
        let touchPin = 0;
        return touchPin;
    
    // Custom block for controlling a lamp based on touch input
    // Usage: controlLamp(declareTouchpad());
    //        Use the touchpad pin returned from declareTouchpad()
    //        to control the lamp based on touch input
    /**
     * Control the lamp based on touch input.
     * @param touchPin - the pin number for the touchpad
     */
    //% block="Control Lamp with Touchpad on pin %touchPin"
    function controlLamp(touchPin: number): void {
        // Check if the touchpad is touched
        if (pins.digitalReadPin(touchPin) == 1) {
            // Turn on the lamp
            basic.showIcon(IconNames.Yes);
        }
        else 
        {
            // Turn off the lamp
            basic.clearScreen();
        }
}
    }
}