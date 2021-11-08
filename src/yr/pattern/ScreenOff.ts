import { PhoneState } from './PhoneState';
import { ScreenCharging } from './ScreenCharging';
import { ScreenOn } from './ScreenOn';

export class ScreenOff extends PhoneState {

  plugPower(): PhoneState {
   return new ScreenCharging();
 }
  
  pressButton(powerLow: boolean): PhoneState{
    if (powerLow) {
      console.log("Low power, Screen will be off");
      return new ScreenOff();
    }
    else {
      return new ScreenOn();
    }
  }
}