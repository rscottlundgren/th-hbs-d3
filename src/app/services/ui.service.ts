import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private isDailyActive: boolean = false;
  private isWeeklyActive: boolean = true;
  private isMonthlyActive: boolean = false;
  private dailyActive = new Subject<any>();
  private weeklyActive = new Subject<any>();
  private monthlyActive = new Subject<any>();

  constructor() { }

  toggleDailyActive(): void {
    this.isDailyActive = !this.isDailyActive;
    this.dailyActive.next(this.isDailyActive);
  }

  toggleWeeklyActive(): void {
    this.isWeeklyActive = !this.isWeeklyActive;
    this.weeklyActive.next(this.isWeeklyActive);
  }

  toggleMonthlyActive(): void {
    this.isMonthlyActive = !this.isMonthlyActive;
    this.monthlyActive.next(this.isMonthlyActive);
  }

  onDailyToggle(): Observable<any> {
    return this.dailyActive.asObservable();
  }

  onWeeklyToggle(): Observable<any> {
    return this.weeklyActive.asObservable();
  }

  onMonthlyToggle(): Observable<any> {
    return this.monthlyActive.asObservable();
  }
}
