import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {CasesService} from '../../services/cases.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';


@Component({
  selector: 'app-available-cases',
  templateUrl: './available-cases.component.html',
  styleUrls: ['./available-cases.component.scss']
})
export class AvailableCasesComponent implements OnInit {
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

    constructor(private casesService: CasesService,
                private router: Router,
                private notificationService: NotificationService) {
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
        this.getAvailCases()
    }
    
    getAvailCases() {
        this.casesService.avlCases()
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
            if (val === 'checkout_selected') {
                this.openCheckOutModel();
            }
        }
    }
    
    onDblClick(val) {
        console.log('valllll', val.data.AlertId);
        sessionStorage.setItem('page', 'availCase');
        this.router.navigate(['/dtlCases'], {queryParams: {id: val.data.CaseId}});
    }
    
    openCheckOutModel() {
        let data = [];
        data = this.selectedRows;
        data.forEach((x) => {
            x.CsActUser = this.userid;
        });
        console.log('selelleeee', data);
        this.casesService.checkOutCases(data)
            .subscribe((res) => {
                console.log('check in res', res);
                this.notificationService.showNotification(res.message, 'success');
                this.getAvailCases();
                // this.notificationService.showNotification(res, 'success')

            })
    }

}
