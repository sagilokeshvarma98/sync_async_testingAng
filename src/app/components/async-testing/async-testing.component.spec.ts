import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsyncTestService } from 'src/app/services/async-test.service';

import { AsyncTestingComponent } from './async-testing.component';

describe('AsyncTestingComponent', () => {
  let component: AsyncTestingComponent;
  let fixture: ComponentFixture<AsyncTestingComponent>;
  let service: AsyncTestService;
  let h3: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncTestingComponent],
      providers: [AsyncTestService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncTestingComponent);
    service = TestBed.inject(AsyncTestService);
    component = fixture.componentInstance;
    h3 = fixture.nativeElement.querySelector('h3');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some content written in h3 tag', () => {
    component.getAttendence();
    fixture.detectChanges();
    expect(h3.textContent === 'submitted').toBeTruthy();
  })

  it('should return the value as submitted', () => {
    spyOn(service, 'checkUser').and.returnValue(true);
    let attendence = component.getAttendence();
    expect(attendence).toEqual('submitted');
    expect(service.checkUser).toHaveBeenCalledTimes(1);
  })

});