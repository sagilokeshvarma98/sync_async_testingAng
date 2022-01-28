import { Component, OnInit } from '@angular/core';
import { AsyncTestService } from 'src/app/services/async-test.service';

@Component({
  selector: 'app-async-testing',
  templateUrl: './async-testing.component.html',
  styleUrls: ['./async-testing.component.css']
})
export class AsyncTestingComponent implements OnInit {

  constructor(private async: AsyncTestService) {
    async.authenticate();
  }

  attendence: string;

  ngOnInit(): void {
  }

  getAttendence() {
    if (this.async.checkUser()) {
     return this.attendence = 'submitted';
    }
     else{
      return this.attendence = 'User not found';
     } 
  }

}
