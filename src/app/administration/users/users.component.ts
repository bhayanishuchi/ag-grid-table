import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource: any = [];
    allMode: string;
    checkBoxesMode: string;
    selectedRows: any = [];
    columnChooserModes = 'select';
    currentFilter: any;
    showFilterRow: boolean;
  constructor(private alertService: AlertService) {
      this.allMode = 'allPages';
      this.checkBoxesMode = 'onClick';
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.alertService.getusers()
        .subscribe((res) => {
          console.log('res', res);
          this.dataSource = res
        }, error => {
          console.log('error', error);
        })
  }
  onDblClick(val) {
    console.log('valllll', val.data);
  }
}
