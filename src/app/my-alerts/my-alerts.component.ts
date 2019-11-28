import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {Company, Service} from '../services/data.services';
import {Router} from '@angular/router';

@Component({
    selector: 'app-my-alerts',
    templateUrl: './my-alerts.component.html',
    styleUrls: ['./my-alerts.component.scss']
})
export class MyAlertsComponent implements OnInit {
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    // orders: Company[];
    currentFilter: any;
    showFilterRow: boolean;
    dataSource: Company[];
    selectedRows: any = [];
    display = 'none';
    allMode: string;
    checkBoxesMode: string;
    columnChooserModes = 'select'

    constructor(service: Service,
                private router: Router) {
        this.allMode = 'allPages';
        this.checkBoxesMode = 'onClick'
        this.dataSource = service.getCompanies();
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

    customizeExcelCell(options) {
        let gridCell = options.gridCell;
        if (!gridCell) {
            return;
        }
        if (gridCell.rowType === 'data') {
            if (gridCell.column.dataField === 'CompanyName') {
                options.font.bold = true;
            }
            if (gridCell.column.dataField === 'Phone') {
                options.backgroundColor = '#FFBB00';
                options.font.color = '#000000';
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
        console.log('valllll', val);
        this.router.navigate(['/dashboard']);
    }

}
