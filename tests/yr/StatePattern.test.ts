import { Phone } from '../../src/yr/Phone';
import { ScreenOff } from '../../src/yr/ScreenOff';
import { ScreenCharging } from '../../src/yr/ScreenCharging';
import { ScreenOn } from '../../src/yr/ScreenOn';

let phone: Phone;


// https://stackoverflow.com/questions/133214/is-there-a-typical-state-machine-implementation-pattern/44955234#44955234
// logic table: https://web.archive.org/web/20120302194517/http://www.codeguru.com/Cpp/misc/misc/math/article.php/c9629
describe('PhoneStateTest', () => {

  beforeEach(async () => {
    phone = new Phone("123-456-7890");
  })

  it('get number', () => {
    expect(phone.number).toEqual("123-456-7890");
  });

  //https://jestjs.io/docs/using-matchers
  it('get initial state', () => {
    expect(phone.state).toBeInstanceOf(ScreenOff);
  })

  it('Plug power de ecran off', () => {
    phone.plugPower();
    expect(phone.state).toBeInstanceOf(ScreenCharging);
  })

  it('Plug power de ecran on', () => {
    phone.pressButton();
    expect(phone.state).toBeInstanceOf(ScreenOn);
    phone.plugPower();
    expect(phone.state).toBeInstanceOf(ScreenCharging);
  })

  it('Unplug power', () => {
    phone.plugPower();
    expect(phone.state).toBeInstanceOf(ScreenCharging);
    phone.unplugPower();
    expect(phone.state).toBeInstanceOf(ScreenOff);
  })

  it('Press button deux fois', () => {
    phone.pressButton();
    expect(phone.state).toBeInstanceOf(ScreenOn);
    phone.pressButton();
    expect(phone.state).toBeInstanceOf(ScreenOff);
  })

  it('Unplug si ecran ouvert est impossible', () => {
    phone.pressButton();
    expect(phone.state).toBeInstanceOf(ScreenOn);
    
    expect( () => phone.unplugPower() ).toThrowError();
  });

  it('Press button avec powerLow ne change pas son etat', () => {
    phone.powerLow = true;
    phone.pressButton();
    expect(phone.state).toBeInstanceOf(ScreenOff);
  });

});

