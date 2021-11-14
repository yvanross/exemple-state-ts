import { ScreenState } from "./ScreenState";
import { ScreenOff } from "./ScreenOff";

export class ScreenCharging implements ScreenState{
    plugPower(): ScreenState {
        return this; // deja plugged
    }
    unplugPower(): ScreenState {
        return new ScreenOff();
    }
    pressButton(): ScreenState {
        return this;  // appuyer le bouton ne fait rien pendant la charge
    }
}