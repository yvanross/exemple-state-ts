import { PhoneState } from "./PhoneState";

export class Phone {
    private _number:string;
    private _state: PhoneState;
    private _power: number;
    
    constructor(number:string, state: PhoneState) {
        this._number = number;
        this._state = state;
        this._power = 100;
    }

    get number(): string {
        return this._number;
    }

    public setState(state: PhoneState){
        this._state = state;
    }

    public get power(){
        return this._power;
    }

}