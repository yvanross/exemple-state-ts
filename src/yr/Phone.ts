import { ScreenOff } from "./ScreenOff";
import { ScreenState } from "./ScreenState";

export class Phone {
    private _number: string;
    private _state: ScreenState;
    private _powerLow : boolean = false;

    constructor(number: string) {
        this._number = number;
        this._state = new ScreenOff();
    }

    unplugPower() {
        this._state = this._state.unplugPower();
    }
    plugPower() {
        this._state = this._state.plugPower();
    }

    pressButton() {
        this._state = this._state.pressButton(this._powerLow);
    }

    get number(): string {
        return this._number;
    }

    
    public set powerLow(powerLow : boolean) {
        this._powerLow = powerLow;
    }
    
    public get powerLow() : boolean {
        return this._powerLow;
    }
    
    public get state(): ScreenState {
        return this._state;
    }

}