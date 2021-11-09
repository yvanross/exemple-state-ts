import { PhoneWithStateTable as Phone } from '../../src/yr/PhoneWithStateTable';
import { ScreenOff } from '../../src/yr/Pattern/ScreenOff';
import { ScreenOn } from '../../src/yr/Pattern/ScreenOn';
import { PhoneState } from '../../src/yr/Pattern/PhoneState';
import { ScreenCharging } from '../../src/yr/Pattern/ScreenCharging';
import { InvalidState } from '../../src/yr/Pattern/InvalidState';
let phone: Phone;

// https://stackoverflow.com/questions/133214/is-there-a-typical-state-machine-implementation-pattern/44955234#44955234
describe('PhoneStateTest', () => {

  beforeEach(async () => {
    let stateTable = [
      ['ScreenOff', 'ScreenOff', 'pressButton', 'true', 'displayLowPowerMessage'],
      ['ScreenOff', 'ScreenOn', 'pressButton', 'false', ''],
      ['ScreenOn', 'ScreenOff', 'pressButton', '', ''],
      ['ScreenOff', 'ScreenCharging', 'plugPower', '', ''],
      ['ScreenOn', 'ScreenCharging', 'plugPower', '', ''],
      ['ScreenCharging', 'ScreenOff', 'unplugPower', '', ''],
    ];  
    phone = new Phone("123-456-7890", stateTable);
  })

  it('get number', () => {
    expect(phone.number).toEqual("123-456-7890");
  });

  it('ScreenOFF is initial state', () => {
    expect(phone.state).toEqual('ScreenOff');
  });

  it('ScreenOFF plugPower and unplug', () => {
    phone.plugPower();
    expect(phone.state).toEqual('ScreenCharging');
    phone.unplugPower();
    expect(phone.state).toEqual('ScreenOff');
  });

  it('ScreenOFF pressButton with powerLow', () => {
    phone.pressButton();
    expect(phone.state).toEqual('ScreenOff');
  });

  it('ScreenOFF pressButton with !powerLow', () => {
    phone.powerLow = false;
    phone.pressButton();
    expect(phone.state).toEqual('ScreenOn');
  });

  it('ScreenOn plugPower', () => {
    phone.state = "ScreenOn";
    phone.plugPower();
    expect(phone.state).toEqual('ScreenCharging');
  });

  it('ScreenOn pressButton', () => {
    phone.state = "ScreenOn";
    phone.pressButton();
    expect(phone.state).toEqual('ScreenOff');
  });

  it('ScreenOFF plugPower, unplug and press button', () => {
    phone.plugPower();
    phone.unplugPower();
    phone.pressButton();
    expect(phone.state).toEqual('ScreenOn');
  });


});


