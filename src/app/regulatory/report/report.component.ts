import {Component, OnInit, ViewChild} from '@angular/core';
import {RegulatoryService} from '../../services/regulatory.service';
import {DxDataGridComponent} from 'devextreme-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  dataSource: any = [];
  currentFilter: any;
  allMode: string;
  checkBoxesMode: string;
  columnChooserModes = 'select';
  showFilterRow: boolean;
  constructor(private regulatoryService: RegulatoryService,
              private router: Router) {
    this.showFilterRow = true;
    this.checkBoxesMode = 'onClick';
    this.allMode = 'allPages';
  }

  ngOnInit() {
    this.getReports();
  }
  getReports() {
    this.regulatoryService.getReports()
        .subscribe((res) => {
          console.log('res', res);
          this.dataSource = res;
        })
  }
  onDblClick(val) {
    console.log('valllll', val.data.RegParentId);
    this.router.navigate(['/regulatorySar'], {queryParams: {id: val.data.RegId}});
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

}
