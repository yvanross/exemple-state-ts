import { Phone } from '../../src/yr/PhoneWidthStateTable';

let phone: Phone;
// state table:  https://stackoverflow.com/questions/133214/is-there-a-typical-state-machine-implementation-pattern/44955234#44955234
// logic table: https://web.archive.org/web/20120302194517/http://www.codeguru.com/Cpp/misc/misc/math/article.php/c9629
describe('PhoneStateTest', () => {

  beforeEach(async () => {
    phone = new Phone("123-456-7890");
  })

  it('get number', () => {
    expect(phone.number).toEqual("123-456-7890");
  });

});

