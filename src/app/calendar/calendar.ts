export class Calendar 
{
  weeks: Date[][] = [];
  weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  month = 'Май 2025';

  constructor() 
  {
    this.generateCalendar();
  }

  private generateCalendar(): void 
  {
    const year = 2025;
    const month = 4; 
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const firstDayOfWeek = firstDay.getDay(); 
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1));

    const weeks: Date[][] = [];
    let currentDate = new Date(startDate);
    
    for (let week = 0; week < 6; week++) 
    {
      const days: Date[] = [];
      for (let day = 0; day < 7; day++) 
        {
        days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(days);
    }

    this.weeks = weeks;
  }

  public isCurrentMonth(date: Date): boolean 
  {
    return date.getMonth() === 4 && date.getFullYear() === 2025;
  }

  public isFirstDay(date: Date): boolean 
  {
    return date.getDate() === 1 && this.isCurrentMonth(date);
  }
}