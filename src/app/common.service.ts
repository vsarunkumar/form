import { Injectable } from '@angular/core';
// import { } from 'rxjs/Observable';

@Injectable()

class CommonService {

  counter = 0;

  constructor() {}

  increment() {
    this.counter = this.counter + 1;
    return this.counter;
  }

}