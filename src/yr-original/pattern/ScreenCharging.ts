import { PhoneState } from './PhoneState';
import { ScreenOff } from './ScreenOff';

export class ScreenCharging extends PhoneState {
  
 
  
  unplugPower(): PhoneState{
    return new ScreenOff();
  }
}