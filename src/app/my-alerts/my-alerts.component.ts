import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {Company, Service} from '../services/data.services';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-my-alerts',
    templateUrl: './my-alerts.component.html',
    styleUrls: ['./my-alerts.component.scss']
})
export class MyAlertsComponent implements OnInit {
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
        this.checkBoxesMode = 'onClick';
        this.showFilterRow = true;
    }

    ngOnInit() {
        this.userid = 'DEMOUSER1';
        this.alertService.getMyAlert(this.userid)
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
