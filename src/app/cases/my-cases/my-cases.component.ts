import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {Company, Service} from '../../services/data.services';
import {Router} from '@angular/router';
import {CasesService} from '../../services/cases.service';
import {NotificationService} from '../../services/notification.service';

@Component({
    selector: 'app-my-cases',
    templateUrl: './my-cases.component.html',
    styleUrls: ['./my-cases.component.scss']
})
export class MyCasesComponent implements OnInit {
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    currentFilter: any;
    showFilterRow: boolean;
    dataSource: any = [];
    selectedRows: any = [];
    display = 'none';
    CasesSupRsns;
    selectedCase;
    RouteModal = 'none';
    closeModal = 'none';
    selectUserId = [];
    selectloves: any = {};
    allMode: string;
    showSuccessMsg = false;
    checkBoxesMode: string;
    columnChooserModes = 'select';
    userid;

    constructor(private casesService: CasesService,
                private router: Router,
                private notificationService: NotificationService) {
        this.allMode = 'allPages';
        this.checkBoxesMode = 'onClick';
        this.showFilterRow = true;
    }

    ngOnInit() {
        this.getCases()
    }
    getCases() {
        this.userid = 'DEMOUSER1';
        this.casesService.getMyCases(this.userid)
            .subscribe((res) => {
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
                this.openCloseModal();
            } else if (val === 'route_alert') {
                document.getElementById('route_popup').style.display = 'block';
                this.openRouteModal();
            } else if (val === 'check_selected') {
                this.openCheckInModel();
                // alert('Selected Alerts Checked In')
            }
        }
    }
    openCheckInModel() {
        // const data = {
        //     CsActUser: this.userid,
        //     CaseId: this.selectedCase
        // };
        // const checkInData = [];
        // checkInData.push(data)
        let data = [];
        data = this.selectedRows;
        data.forEach((x) => {
            x.CsActUser = this.userid;
        });
        console.log('selelleeee', data);
        this.casesService.checkInCases(data)
            .subscribe((res) => {
                console.log('check in res', res);
                this.notificationService.showNotification(res.message, 'success');
                this.getCases();
                // this.notificationService.showNotification(res, 'success')
            })
    }
    openCloseModal() {
        this.closeModal = 'block';
        this.getloves()
    }
    openRouteModal() {
        this.RouteModal = 'block';
        this.casesService.getusers()
            .subscribe((res) => {
                console.log('res', res);
                this.selectUserId = res
            }, error => {
                console.log('error', error);
            })

    }
    onRouteok() {
        console.log('this.selectedRowsssssssss', this.selectedRows);
        let data = [];
        data = this.selectedRows;
        data.forEach((x) => {
            x.CsActUser = this.userid;
        });
        console.log('data', data);
        this.casesService.routeCases(data)
            .subscribe((res) => {
                console.log('routeData in res', res);
                this.notificationService.showNotification(res.message, 'success');
                this.getCases();
                document.getElementById('route_popup').style.display = 'none';
            })
    }
    getloves() {
        this.casesService.getlovs()
            .subscribe((res) => {
                this.selectloves = res.lovs[0];
            }, error => {
                console.log('error', error);
            })
    }
    oncloseok() {
        console.log('this.selectedRowsssssssss', this.selectedRows);
        let data = [];
        data = this.selectedRows;
        data.forEach((x) => {
            x.CsActUser = this.userid;
        });
        console.log('data', data);
        this.casesService.closeCases(data)
            .subscribe((res) => {
                console.log('closeData in res', res);
                this.notificationService.showNotification(res.message, 'success')
                this.getCases();
                document.getElementById('close_popup').style.display = 'none';
            })

    }
    onDblClick(val) {
        console.log('valllll', val.data.CaseId);
        this.router.navigate(['/dtlCases'], {queryParams: {id: val.data.CaseId}});
    }

}
