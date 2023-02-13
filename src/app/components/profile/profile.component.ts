import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() isDailyActive: boolean = false;
  @Input() isWeeklyActive: boolean = true;
  @Input() isMonthlyActive: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private dataService: DataService) {
    this.subscription = this.uiService.onDailyToggle().subscribe((value) => (this.isDailyActive = value));
    this.subscription = this.uiService.onWeeklyToggle().subscribe((value) => (this.isWeeklyActive = value));
    this.subscription = this.uiService.onMonthlyToggle().subscribe((value) => (this.isMonthlyActive = value));
  }

  ngOnInit() { }

  onDailyClick() {
    this.uiService.toggleDailyActive();
    if (this.isWeeklyActive === true) {
      this.uiService.toggleWeeklyActive();
    }
    if (this.isMonthlyActive === true) {
      this.uiService.toggleMonthlyActive();
    }
    this.dataService.toggleDailyActive();
  }

  onWeeklyClick() {
    if (this.isDailyActive === true) {
      this.uiService.toggleDailyActive();
    }
    this.uiService.toggleWeeklyActive();
    if (this.isMonthlyActive === true) {
      this.uiService.toggleMonthlyActive();
    }
    this.dataService.toggleWeeklyActive();
  }

  onMonthlyClick() {
    if (this.isDailyActive === true) {
      this.uiService.toggleDailyActive();
    }
    if (this.isWeeklyActive === true) {
      this.uiService.toggleWeeklyActive();
    }
    this.uiService.toggleMonthlyActive();
    this.dataService.toggleMonthlyActive();
  }
}
