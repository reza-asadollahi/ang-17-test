import { Component, ViewEncapsulation } from '@angular/core';
import moment from "jalali-moment";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-calendar-2',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './calendar2.component.html',
  styleUrl: './calendar2.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Calendar2Component {
  weekdays: string[] = [
    'شنبه',
    'یک شنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه'
  ];
  month:string;
  year: string |number;

  private dateArray: number[] = [];
  dateMatrix: number[][] = [];
  prices: number[] = Array.from({length: 30}, () => Math.floor(Math.random() * 10000000))

  constructor() {
    moment.locale("fa")
    console.log(moment().startOf('month').weekday())

    const startCurrentMonthStartDate: moment.Moment = moment().startOf('month')
    const daysOfMonth:number = moment().daysInMonth();

    this.dateArray = Array(startCurrentMonthStartDate.weekday()).fill('').concat(Array.from({length: daysOfMonth}, (v, i) => i+1))
    for(let i = 0; i <= daysOfMonth; i+=7){
      this.dateMatrix[i] = this.dateArray.slice(i, i+7)
    }

    this.month = moment().format('MMMM');
    this.year = moment().year();

    console.log(this.dateArray)
    console.log(this.dateMatrix)
  }

  protected readonly moment = moment;
}
