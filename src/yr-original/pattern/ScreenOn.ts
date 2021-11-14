import { PhoneState } from './PhoneState';
import { ScreenCharging } from './ScreenCharging';
import { ScreenOff } from './ScreenOff';

export class ScreenOn extends PhoneState {

  pressButton(powerLow: boolean):PhoneState {
    return new ScreenOff();
  }
  
  plugPower(): PhoneState{
    return new ScreenCharging();
  }
}