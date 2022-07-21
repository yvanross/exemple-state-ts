import { Phone } from "./Phone";

export abstract class PhoneState{
    protected _phone : Phone;

    constructor(phone: Phone){
        this._phone = phone;
    }

    public get phone(){
        return this._phone;
    }

    public abstract handlePressButton();
    public abstract handlePlugPower();
    public abstract handleUnplugPower();
}