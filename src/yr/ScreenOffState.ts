import { PhoneState } from "./PhoneState";
import { Phone } from "./Phone";
import { ScreenOnState } from "./ScreenOnState";

export class ScreenOffState extends PhoneState{
    
    constructor(phone: Phone){
        super(phone);
    }

    public handlePressButton() {
        if(this._phone.power > 50){
            console.log("Battery is low - screen off state")
        }
        else
        {
            this.phone.setState(new ScreenOnState(this.phone));
        }
    }
    public handlePlugPower() {
        console.log("Handle plug power - screen off state")
    }
    public handleUnplugPower() {
        console.log("Do nothing - screen off state");
    }

}