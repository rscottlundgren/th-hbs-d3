import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { DATA } from '../../../db/data';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss']
})
export class PrioritiesComponent {
  prioritiesByTimeframe: any = [];
  timeframe: any = {
    daily: false,
    weekly: true,
    monthly: false
  }
  subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getDataOnLinkClick().subscribe((value) => (this.timeframe = value));
  }

  ngOnInit(): void {
    this.prioritiesByTimeframe = DATA;
  }

}
