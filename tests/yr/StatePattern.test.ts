import { Phone } from '../../src/yr/Phone';
import { ScreenOff } from '../../src/yr/Pattern/ScreenOff';
import { ScreenOn } from '../../src/yr/Pattern/ScreenOn';
import { PhoneState } from '../../src/yr/Pattern/PhoneState';
import { ScreenCharging } from '../../src/yr/Pattern/ScreenCharging';
import { InvalidState } from '../../src/yr/Pattern/InvalidState';

let phone: Phone;


// https://stackoverflow.com/questions/133214/is-there-a-typical-state-machine-implementation-pattern/44955234#44955234
describe('PhoneStateTest', () => {

  beforeEach(async () => {
    phone = new Phone("123-456-7890");
  })

  it('get number', () => {
    expect(phone.number).toEqual("123-456-7890");
  });

  it ('expect exception', () => {
    phone.state = new InvalidState();
    expect(() => { phone.state.plugPower() }).toThrow('Method not implemented.');
    expect(() => { phone.state.unplugPower() }).toThrow('Method not implemented.');
    expect(() => { phone.state.pressButton(false) }).toThrow('Method not implemented.');
  })
  // https://jestjs.io/docs/using-matchers
  it('get initial state', () => {
    expect(phone.state instanceof ScreenOff).toEqual(true);
    expect(phone.state instanceof PhoneState).toEqual(true); 
    
  });

  it('Plug power', () => {
    phone.plugPower();
    expect(phone.state instanceof ScreenCharging).toEqual(true);
  });

  it('un Plug power', () => {
    phone.plugPower();
    phone.unplugPower();
    expect(phone.state instanceof ScreenOff);
  });

  it('pressButton powerLow', () => {
    phone.pressButton();
    expect(phone.state instanceof ScreenOff).toEqual(true);
  })

  it('plugPower, unplug and then pressButton !powerLow', () => {
    phone.plugPower();
    phone.unplugPower();
    phone.pressButton();
    expect(phone.state instanceof ScreenOn).toEqual(true);
    phone.pressButton();
    expect(phone.state instanceof ScreenOff).toEqual(true);
  })

  it('screenOn plugPower', () => {
    phone.state=new ScreenOn();
    phone.plugPower();
    expect(phone.state instanceof ScreenCharging).toEqual(true);
    
  })


});

