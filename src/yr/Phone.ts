import { PhoneState } from './pattern/PhoneState';
import { ScreenOff } from './pattern/ScreenOff';

export class Phone  {
  
 
  private _number:string;
  private _state: PhoneState
  private _powerLow: boolean;
  
  constructor(number:string) {
    this._number = number;
    this._state = new ScreenOff();
    this._powerLow = true;
  }

  plugPower() {
    this._state = this._state.plugPower();
    this._powerLow = false;
  }
  unplugPower() {
    this._state = this._state.unplugPower();
  }
  pressButton() {
      this._state =  this._state.pressButton(this._powerLow);
  }
  get number(): string {
      return this._number;
  }

  get state(): PhoneState{
    return this._state;
    }
    
  set state(new_state: PhoneState){
    this._state = new_state;
  }
  
}
