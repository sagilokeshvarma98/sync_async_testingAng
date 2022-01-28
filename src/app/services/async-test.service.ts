import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncTestService {

  constructor() { }

  authenticate() {
    localStorage.setItem('User','Lokesh');
  }

  checkUser():Boolean {
    return (localStorage.getItem('User') === 'Lokesh');
  }

  resetLocale() {
    localStorage.clear();
  }
}
