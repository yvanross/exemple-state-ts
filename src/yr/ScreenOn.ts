import { ScreenCharging } from "./ScreenCharging";
import { ScreenOff } from "./ScreenOff";
import { ScreenState } from "./ScreenState";

export class ScreenOn implements ScreenState{
    plugPower(): ScreenState {
        return new ScreenCharging();
    }
    
    unplugPower(): ScreenState {
        throw new Error("On ne peut pas unplug si l'ecran est ouvert.");
    }

    pressButton(): ScreenState {
        return new ScreenOff();
    }
}