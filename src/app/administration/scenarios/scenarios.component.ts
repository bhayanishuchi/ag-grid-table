import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {AdministrationService} from '../../services/administration.service';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent implements OnInit {
  currentFilter: any;
  showFilterRow: boolean;
  dataSource: any = [];
  selectedRows: any = [];
  columnChooserModes = 'select';
  display = 'none';
  allMode: string;
  checkBoxesMode: string;
  constructor(private router: Router,
              private notificationService: NotificationService,
              private administrationService: AdministrationService) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
  }

  ngOnInit() {
    this.getScenarios()
  }

  getScenarios() {
    this.administrationService.getScenario()
        .subscribe((res) => {
          this.dataSource = res;
        })
  }
  getSelectedRows(val) {
    console.log('selected row', this.selectedRows, this.selectedRows.length);
    if (this.selectedRows.length === 0) {
      alert('Select any row');
    } else {
      if (val === 'activate') {
        this.Activate();
      } else if (val === 'deActivate') {
        this.Deactivate();
      }
    }
  }


  Activate() {
    let data = [];
    data = this.selectedRows;
    console.log('selelleeee', data);
    this.administrationService.getActivate(data)
        .subscribe((res) => {
          console.log('check in res', res);
          this.notificationService.showNotification(res.message, 'success')

        })
  }

  Deactivate() {
    let data = [];
    data = this.selectedRows;
    console.log('selelleeee', data);
    this.administrationService.getDeactivate(data)
        .subscribe((res) => {
          console.log('check in res', res);
          this.notificationService.showNotification(res.message, 'success')

        })
  }

  onDblClick(val) {
    console.log('valllll', val.data.ScenId);
    this.router.navigate(['/dtlscenarios'], {queryParams: {id: val.data.ScenId}});
  }

  selectionChangedHandler() {
    console.log('selectedrow', this.selectedRows);
  }
}
