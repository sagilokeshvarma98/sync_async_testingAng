import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  hotelRoomCapacity: number = 18;
  customerRegistration: number = 4;

  registerCustomer() {
    return ++this.customerRegistration;
  }

  unregisterCustomer() {
    return --this.customerRegistration;
  }

}
