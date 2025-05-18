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
  selectedDate: Date | null = null;

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

  isFirstDay(date: Date): boolean 
  {
    return this.calendar.isFirstDay(date);
  }

  selectDate(date: Date): void 
  {
    this.selectedDate = date;
  }

  isSelected(date: Date): boolean 
  {
    return this.selectedDate?.getTime() === date.getTime();
  }
}
