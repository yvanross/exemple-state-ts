import { Phone } from '../src/Phone';

let phone: Phone;


// https://stackoverflow.com/questions/133214/is-there-a-typical-state-machine-implementation-pattern/44955234#44955234
describe('PhoneStateTest', () => {

  beforeEach(async () => {
    phone = new Phone("123-456-7890");
	})

  it('get number', () => {
    expect(phone.number).toEqual("123-456-7890");
  });

});