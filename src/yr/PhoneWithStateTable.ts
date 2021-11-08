
export class PhoneWithStateTable  {

  
  private _stateTable: string[][];
  private _number: string;
  private _state: string
  private _powerLow: boolean;
  readonly FIRST = 0;
  readonly CURRENT_STATE = 0;
  readonly NEXT_STATE = 1;
  readonly METHOD_NAME = 2;
  readonly POWER_LOW = 3;
  readonly OPERATION = 4;

  constructor(number:string) {
    this._number = number;
    this._state = "ScreenOff"
    this._powerLow = true;
    this._stateTable = [
      ['ScreenOff', 'ScreenOff', 'pressButton', 'true', 'displayLowPowerMessage'],
      ['ScreenOff', 'ScreenOn', 'pressButton', 'false', ''],
      ['ScreenOn', 'ScreenOff', 'pressButton', '', ''],
      ['ScreenOff', 'ScreenCharging', 'plugPower', '', ''],
      ['ScreenOn', 'ScreenCharging', 'plugPower', '', ''],
      ['ScreenCharging', 'ScreenOff', 'unplugPower', '', ''],
    ];  
  }

  filterByOperationAndState():string[][] {
    let fullname = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
    let method_name = fullname.split('.')[1];
     return this._stateTable
     .filter(table => table[this.METHOD_NAME] == method_name)
     .filter(table => table[this.CURRENT_STATE] == this._state)
     
  }
  plugPower() {
    let result = this.filterByOperationAndState();
    expect(result.length).toEqual(1);
    this._powerLow = false;
    this._state = result[this.FIRST][this.NEXT_STATE];
  }
  unplugPower() {
    let result = this.filterByOperationAndState();
    expect(result.length).toEqual(1);
    this._state = result[this.FIRST][this.NEXT_STATE];
  }
  pressButton() {
    let powerLowStr: string = String(this._powerLow);
    let result = this.filterByOperationAndState();
    expect(result.length >= 1).toBeTruthy();
    
    let powerState = result.filter(table => table[this.POWER_LOW] == powerLowStr);
    if (powerState.length>0) {
      this._state = powerState[this.FIRST][this.NEXT_STATE];
      if (powerState[this.FIRST][this.OPERATION].length > 0)
        eval(`this.${powerState[this.FIRST][this.OPERATION]}()`);  
    } else {
      this._state = result[this.FIRST][this.NEXT_STATE];
    }
        

  }
  get number(): string {
      return this._number;
  }

  // get powerLow(): boolean {
  //   return this._powerLow;
  // }

  set powerLow(power: boolean) {
    this._powerLow = power;
  }
  
  get state(): string{
    return this._state;
    }
    
  set state(new_state: string){
    this._state = new_state;
  }

  displayLowPowerMessage() {
    console.log("Low power, cannot change state to screenOn");
  }
}
