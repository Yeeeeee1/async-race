import { Injectable } from '@angular/core';
import { ICar } from '../shared/models/carModel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  id = 0;
  cars: ICar[] = [];
  constructor() {}

  getCars(id: number): ICar[] {
    this.id = id;
    return this.cars.slice(id * 7 - 7, id * 7);
  }

  addCar(car: ICar): ICar[] {
    this.cars = [car, ...this.cars];
    return this.cars.slice(this.id * 7 - 7, this.id * 7);
  }

  removeBook(id: number): ICar[] {
    return (this.cars = this.cars.filter((car: ICar) => car.id !== id));
  }

  updateCar(carBlank: ICar): ICar[] {
    this.cars = this.cars.map((item: ICar) => {
      return item.id === carBlank.id ? carBlank : item;
    });
    return this.cars;
  }
}
