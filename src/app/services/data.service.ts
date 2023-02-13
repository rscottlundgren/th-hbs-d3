import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private timeframesToDisplay: any = {
    daily: false,
    weekly: true,
    monthly: false
  }
  private displayedTimeFrames = new Subject<any>();

  constructor() { }

  toggleDailyActive(): void {
    this.timeframesToDisplay = {
      daily: true,
      weekly: false,
      monthly: false
    };
    this.displayedTimeFrames.next(this.timeframesToDisplay);
  }

  toggleWeeklyActive(): void {
    this.timeframesToDisplay = {
      daily: false,
      weekly: true,
      monthly: false
    };
    this.displayedTimeFrames.next(this.timeframesToDisplay);
  }

  toggleMonthlyActive(): void {
    this.timeframesToDisplay = {
      daily: false,
      weekly: false,
      monthly: true
    };
    this.displayedTimeFrames.next(this.timeframesToDisplay);
  }

  getDataOnLinkClick(): Observable<any> {
    return this.displayedTimeFrames.asObservable();
  }
}
