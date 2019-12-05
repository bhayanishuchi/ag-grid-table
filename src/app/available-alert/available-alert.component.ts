import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-available-alert',
  templateUrl: './available-alert.component.html',
  styleUrls: ['./available-alert.component.scss']
})
export class AvailableAlertComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  currentFilter: any;
  showFilterRow: boolean;
  dataSource: any = [];
  selectedRows: any = [];
  display = 'none';
  allMode: string;
  checkBoxesMode: string;
  columnChooserModes = 'select';
  userid;

  constructor(private alertService: AlertService,
              private router: Router) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick'
    this.showFilterRow = true;

    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  }

  onCellPrepared(e) {
    if (e.rowType === 'data') {

      if (e.column.dataField === 'CompanyName') {
        e.cellElement.style.fontWeight = 'bold';
      }
      if (e.column.dataField === 'Phone') {
        e.cellElement.style.color = '#000000';

      }

    }
  }

  orderHeaderFilter(data) {
    data.dataSource.postProcess = (results) => {
      results.push({
        text: 'Weekends',
        value: 'weekends'
      });
      return results;
    };
  }

  ngOnInit() {
    this.alertService.getAvailAlert()
        .subscribe((res) => {
          console.log('res', res);
          this.dataSource = res;
        })

  }

  selectionChangedHandler() {
    console.log('selectedrow', this.selectedRows);
  }

  onCloseHandled() {
    this.display = 'none';
    document.getElementById('close_popup').style.display = 'none';
    document.getElementById('route_popup').style.display = 'none';
    document.getElementById('add_case').style.display = 'none';
  }

  getSelectedRows(val) {
    console.log('selected row', this.selectedRows, this.selectedRows.length);
    if (this.selectedRows.length === 0) {
      alert('Select any row');
    } else {
      if (val === 'close_alert') {
        document.getElementById('close_popup').style.display = 'block';
      } else if (val === 'route_alert') {
        document.getElementById('route_popup').style.display = 'block';
      } else if (val === 'add_case') {
        document.getElementById('add_case').style.display = 'block';
      } else if (val === 'check_selected') {
        alert('Selected Alerts Checked In')
      }
    }
  }
  onDblClick(val) {
    console.log('valllll', val.data.AlertId);
    this.router.navigate(['/dtlAlerts'], {queryParams: {id: val.data.AlertId}});
  }
}
