// Declare Touchpad block
// This block declares a touchpad on a specific pin
// Default pin is set to 0 (P0)
// Usage: let touchPin = touchpad.declare();
namespace touchpad {
    /**
     * Declare a touchpad on a specific pin.
     */
    //% block="Declare Touchpad"
    export function declare(): number {
        // Default pin for touchpad is P0
        let touchPin = 0;
        return touchPin;
    }
}

// Control Lamp block
// This block controls a lamp based on touch input
// Usage: controlLamp(touchpad.declare());
// Use the touchpad pin returned from touchpad.declare()
// to control the lamp based on touch input
namespace lamp {
    /**
     * Control the lamp based on touch input.
     * @param touchPin - the pin number for the touchpad
     */
    //% block="Control Lamp with Touchpad on pin %touchPin"
    export function control(touchPin: number): void {
        // Check if the touchpad is touched
        if (pins.digitalReadPin(touchPin) == 1) {
            // Turn on the lamp
            basic.showIcon(IconNames.Yes);
        } else {
            // Turn off the lamp
            basic.clearScreen();
        }
    }
}
