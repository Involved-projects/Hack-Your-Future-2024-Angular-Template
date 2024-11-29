import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter = 0;

  constructor() {
    const value = localStorage.getItem("mycounter");
    if (value) this.counter = +value;
  }

  increment() {
    this.counter++;
    localStorage.setItem("mycounter", this.counter.toString());
  }
}
