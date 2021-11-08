export interface ScreenState {
    plugPower() : ScreenState;
    unplugPower() : ScreenState;
    pressButton(power: boolean) : ScreenState;
}