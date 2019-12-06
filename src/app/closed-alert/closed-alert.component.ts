import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-closed-alert',
  templateUrl: './closed-alert.component.html',
  styleUrls: ['./closed-alert.component.scss']
})
export class ClosedAlertComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  currentFilter: any;
  showFilterRow: boolean;
  dataSource: any = [];
  selectedRows: any = [];
  display = 'none';
  RouteModal = 'none';
  closeModal = 'none';
  AddToCaseModel = 'none';
  AddToNewCaseModel = 'none';
  allMode: string;
  checkBoxesMode: string;
  columnChooserModes = 'select';
  userid;
  selectUserId = [];
  selectedUserId;
  selectedAlert;
  AlertSupRsns;
  selectloves: any = {};
  case_id;
  selectMycase;
  Case_Rsns;
  Case_Types;
  constructor(private alertService: AlertService,
              private notificationService: NotificationService,
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
    this.alertService.getClosedAlert()
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
  getloves() {
    this.alertService.getlovs()
        .subscribe((res) => {
          this.selectloves = res.lovs[0];
        }, error => {
          console.log('error', error);
        })
  }
  getSelectedRows(val) {
    console.log('selected row', this.selectedRows, this.selectedRows.length);
    if (this.selectedRows.length === 0) {
      alert('Select any row');
    } else {
      if (val === 'close_alert') {
        document.getElementById('close_popup').style.display = 'block';
        this.openCloseModal()
      } else if (val === 'route_alert') {
        document.getElementById('route_popup').style.display = 'block';
        this.openRouteModal()
      } else if (val === 'add_case') {
        document.getElementById('add_case').style.display = 'block';
        this.openAddToCaseModel()
      } else if (val === 'check_selected') {
        alert('Selected Alerts Checked In')
      }
    }
  }
  openCloseModal() {
    this.closeModal = 'block';
    this.getloves()
  }
  openRouteModal() {
    this.RouteModal = 'block';
    this.alertService.getusers()
        .subscribe((res) => {
          console.log('res', res);
          this.selectUserId = res
        }, error => {
          console.log('error', error);
        })

  }
  openAddToCaseModel() {
    this.AddToCaseModel = 'block';
    const caseid= 'DEMOUSER1';

    this.alertService.getmycase(caseid)
        .subscribe((res) => {
          console.log('caseid  res', res);
          this.selectMycase = res;
        }, error => {
          console.log('error', error);
        })
  }
  openAddToNewCaseModel() {
    document.getElementById('add_case').style.display = 'none';
    document.getElementById('addtoNewcase').style.display = 'block';
    this.getloves()

  }
  cancelAddToNewCaseModel() {
    document.getElementById('addtoNewcase').style.display = 'none';
    document.getElementById('add_case').style.display = 'block';


  }
  oncloseok() {
    const data = {
      AlActUser: 'DEMOUSER1',
      AlertId: this.selectedAlert
    };

    const closeData = [];
    closeData.push(data)
    this.alertService.putclose(closeData)
        .subscribe((res) => {
          console.log('closeData in res', res);
          this.notificationService.showNotification(res.message, 'success')
          document.getElementById('close_popup').style.display = 'none';

        })

  }
  onRouteok() {
    const data = {
      AlActUser: 'DEMOUSER1',
      AlRteUser: this.selectedUserId,
      AlertId: this.selectedAlert
    };
    const routeData = [];
    routeData.push(data)
    this.alertService.putroute(routeData)
        .subscribe((res) => {
          console.log('routeData in res', res);
          this.notificationService.showNotification(res.message, 'success')
          document.getElementById('route_popup').style.display = 'none';

        })
  }
  onAddToCaseok() {
    let caseId = this.case_id
    const data = {
      CsActUser: 'DEMOUSER1',
      CaseId: this.case_id,
      AlertId: this.selectedAlert,
    };
    console.log('caseid data', data)
    const addtocaseData = [];
    addtocaseData.push(data)
    this.alertService.putaddtocase(caseId, addtocaseData)
        .subscribe((res) => {
          console.log('add to case Data in res', res);
          this.notificationService.showNotification(res.message, 'success')
          document.getElementById('add_case').style.display = 'none';

        })

  }
  onAddToNewCaseok() {
    const data = {
      AlertId: this.selectedAlert,
      CaseRsn: this.Case_Rsns,
      CaseType: this.Case_Types,
      CsActUser: "DEMOUSER1"
    };

    const addtonewcaseData = [];
    addtonewcaseData.push(data)
    this.alertService.putaddtoNewcase(addtonewcaseData)
        .subscribe((res) => {
          console.log('add to new caseData in res', res);
          this.notificationService.showNotification(res.message, 'success')
          document.getElementById('addtoNewcase').style.display = 'none';

        })


  }
  onDblClick(val) {
    console.log('valllll', val.data.AlertId);
    sessionStorage.setItem('page', 'closealearts')

    this.router.navigate(['/dtlAlerts'], {queryParams: {id: val.data.AlertId}});
  }

}
