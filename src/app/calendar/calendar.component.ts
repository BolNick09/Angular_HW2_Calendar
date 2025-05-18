import { Component } from '@angular/core';
import { Calendar } from './calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent
{
  calendar: Calendar;

  constructor() 
  {
    this.calendar = new Calendar();
  }

  get weeks(): Date[][] 
  {
    return this.calendar.weeks;
  }

  get weekdays(): string[] 
  {
    return this.calendar.weekdays;
  }

  get month(): string 
  {
    return this.calendar.month;
  }

  isCurrentMonth(date: Date): boolean 
  {
    return this.calendar.isCurrentMonth(date);
  }
  public isFirstDay(date: Date): boolean 
  {
    return date.getDate() === 1 && this.isCurrentMonth(date);
  }
}
