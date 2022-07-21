import { PhoneState } from "./PhoneState";
import { Phone } from "./Phone";

export class ScreenOnState extends PhoneState{
    
    constructor(phone: Phone){
        super(phone);
    }

    public handlePressButton() {
        console.log("Handle press button - screen on state");
    }
    public handlePlugPower() {
        console.log("Handle plug power - screen on state");
    }
    public handleUnplugPower() {
        console.log("Do nothing - screen on state");
    }

}