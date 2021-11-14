import { ScreenCharging } from "./ScreenCharging";
import { ScreenOn } from "./ScreenOn";
import { ScreenState } from "./ScreenState";

export class ScreenOff implements ScreenState {
    plugPower(): ScreenState {
        return new ScreenCharging();
    }
    unplugPower(): ScreenState {
        return this;
    }
    pressButton(powerLow : boolean): ScreenState {
        if(powerLow) {
            console.log("power low");
            return this;
        } else {
            return new ScreenOn();
        }
    }
}