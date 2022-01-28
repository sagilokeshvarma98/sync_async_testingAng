import { ReservationComponent } from "./reservation.component";

describe('ReservationComponent', () => {
  let reservation: ReservationComponent;

  beforeEach(() => {
    reservation = new ReservationComponent;
  });

  afterEach(() => {
    reservation = null;
  });

  it('customer should reserve room.', () => {
    let custCount = reservation.unregisterCustomer();
    expect(custCount).toBe(3);
  });

  it('customer should reserve room.', () => {
    let custCount = reservation.registerCustomer();
    expect(custCount).toBe(5);
  });

});
