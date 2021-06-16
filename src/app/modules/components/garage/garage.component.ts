import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorEvent } from 'ngx-color';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { ICar } from 'src/app/shared/models/carModel';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
})
export class GarageComponent implements OnInit {
  place = 0;
  carColor = '#000';
  selectedCarId = -1;
  isSelected = true;
  cars: ICar[] = [];
  id: string | null = '';
  carBlank: ICar = {
    name: '',
    color: '',
    id: 0,
  };
  carUpdBlank: ICar = {
    name: '',
    color: '',
    id: 0,
  };
  paramSub: Subscription | null = new Subscription();
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.cars = this.dataService.getCars(Number(this.id));
    });
  }

  updateCar(): void {
    this.carUpdBlank.color = this.carColor;
    this.cars = this.dataService.updateCar(this.carUpdBlank);
    this.carUpdBlank = {
      name: '',
      color: '',
      id: 0,
    };
    this.isSelected = true;
    this.selectedCarId = -1;
  }

  createCar(): void {
    this.carBlank.color = this.carColor;
    this.carBlank.id = this.cars.length;
    this.cars = this.dataService.addCar(this.carBlank);
    this.carBlank = {
      name: '',
      color: '',
      id: 0,
    };
  }

  selectCar(car: ICar): void {
    this.selectedCarId = car.id;
    this.carUpdBlank.id = car.id;
    this.isSelected = false;
  }

  removeCar(id: number): void {
    this.cars = this.dataService.removeBook(id);
  }

  changeColor(e: ColorEvent): void {
    this.carColor = e.color.hex;
  }

  startRace(): void {
    if (this.cars.length === 0) {
      return;
    }
    setInterval(() => {
      this.place++;
    }, 1);
  }
}
