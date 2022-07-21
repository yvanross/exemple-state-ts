import { PhoneState } from "./PhoneState";
import { Phone } from "./Phone";

export class ScreenChargingState extends PhoneState{
    
    constructor(phone: Phone){
        super(phone);
    }

    public handlePressButton() {
        console.log("Handle press button - charging state");
    }
    public handlePlugPower() {
        console.log("Handle plug power - charging state");
    }
    public handleUnplugPower() {
        console.log("Unplug Power - charging state");
    }

}