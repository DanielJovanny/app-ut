import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,TitleCasePipe, CurrencyPipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Input() food?:Food; 
  constructor (public serviceFood:FoodService){
    
  }

  deleteFood(deleteFood:Food){
    
    if (confirm('¿Desea borrar la comida?')) {
      this.serviceFood.deleteFood(deleteFood);
    }else {
      alert('Se cancelo la acción')
    }

  }



}
