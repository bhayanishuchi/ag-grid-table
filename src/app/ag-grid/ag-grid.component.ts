import {Component, OnInit, ViewChild} from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import {HttpClient} from '@angular/common/http';
import {AgGridAngular} from '@ag-grid-community/angular';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import {Router} from '@angular/router';


@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html',
    styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

    @ViewChild('agGrid') agGrid: AgGridAngular;

    columnDefs;
    gridApi;
    gridColumnApi;
    defaultColDef;
    rowSelection;
    paginationPageSize;
    fileName;
    sideBar;
    rowData: any = [];
    display = 'none';
    modules = AllModules;
    selectedData: any = {};
    gridOptions: any = {};

    constructor(private http: HttpClient,
                private router: Router) {


        this.columnDefs = [
            {
                field: 'athlete',
                width: 150,
                filter: 'agTextColumnFilter',
                checkboxSelection: function (params) {
                    return params.columnApi.getRowGroupColumns().length === 0;
                },
                headerCheckboxSelection: function (params) {
                    return params.columnApi.getRowGroupColumns().length === 0;
                }
            },
            {
                field: 'age',
                width: 90,
                filter: 'agNumberColumnFilter'
            },
            {
                field: 'country',
                width: 120,
                filter: 'agTextColumnFilter',
            },
            {
                field: 'year',
                width: 90,
                filter: 'agNumberColumnFilter'
            },
            {
                field: 'date',
                width: 110,
                filter: 'agTextColumnFilter',
            },
            {
                field: 'gold',
                width: 100,
                filter: 'agTextColumnFilter',
            },
            {
                field: 'silver',
                width: 100,
                filter: 'agTextColumnFilter',
            },
            {
                field: 'bronze',
                width: 100,
                filter: 'agTextColumnFilter',
            },
            {
                field: 'total',
                width: 100,
                filter: 'agNumberColumnFilter'
            }
        ];
        this.defaultColDef = {
            sortable: true,
            resizable: true,
            enableValue: true,
            enableRowGroup: true,
            enablePivot: true
        };
        this.sideBar = {
            toolPanels: [
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: {
                        suppressSyncLayoutWithGrid: true
                    }
                }
            ]
        };
        this.paginationPageSize = 15;
        this.gridOptions = {
            rowSelection: 'multiple',
            context: {
                componentParent: this
            }
        };
    }

    ngOnInit() {
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    onBtExport() {
        var params = {
            fileName: this.fileName
        };
        this.fileName = '';
        this.gridApi.exportDataAsCsv(params);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.gridApi.setDomLayout('autoHeight');
        // document.querySelector('#myGrid')..height = '';
        // this.http
        //     .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
        //     .subscribe(data => {
        this.rowData = [{
            'athlete': 'Michael Phelps',
            'age': 23,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 8,
            'silver': 0,
            'bronze': 0,
            'total': 8
        }, {
            'athlete': 'Michael Phelps',
            'age': 19,
            'country': 'United States',
            'year': 2004,
            'date': '29/08/2004',
            'sport': 'Swimming',
            'gold': 6,
            'silver': 0,
            'bronze': 2,
            'total': 8
        }, {
            'athlete': 'Michael Phelps',
            'age': 27,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 4,
            'silver': 2,
            'bronze': 0,
            'total': 6
        }, {
            'athlete': 'Natalie Coughlin',
            'age': 25,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 1,
            'silver': 2,
            'bronze': 3,
            'total': 6
        }, {
            'athlete': 'Aleksey Nemov',
            'age': 24,
            'country': 'Russia',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Gymnastics',
            'gold': 2,
            'silver': 1,
            'bronze': 3,
            'total': 6
        }, {
            'athlete': 'Alicia Coutts',
            'age': 24,
            'country': 'Australia',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 1,
            'silver': 3,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Missy Franklin',
            'age': 17,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 4,
            'silver': 0,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Ryan Lochte',
            'age': 27,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 2,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Allison Schmitt',
            'age': 22,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 3,
            'silver': 1,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Natalie Coughlin',
            'age': 21,
            'country': 'United States',
            'year': 2004,
            'date': '29/08/2004',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 2,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Ian Thorpe',
            'age': 17,
            'country': 'Australia',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Swimming',
            'gold': 3,
            'silver': 2,
            'bronze': 0,
            'total': 5
        }, {
            'athlete': 'Dara Torres',
            'age': 33,
            'country': 'United States',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 0,
            'bronze': 3,
            'total': 5
        }, {
            'athlete': 'Cindy Klassen',
            'age': 26,
            'country': 'Canada',
            'year': 2006,
            'date': '26/02/2006',
            'sport': 'Speed Skating',
            'gold': 1,
            'silver': 2,
            'bronze': 2,
            'total': 5
        }, {
            'athlete': 'Nastia Liukin',
            'age': 18,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Gymnastics',
            'gold': 1,
            'silver': 3,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Marit Bjørgen',
            'age': 29,
            'country': 'Norway',
            'year': 2010,
            'date': '28/02/2010',
            'sport': 'Cross Country Skiing',
            'gold': 3,
            'silver': 1,
            'bronze': 1,
            'total': 5
        }, {
            'athlete': 'Sun Yang',
            'age': 20,
            'country': 'China',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 1,
            'bronze': 1,
            'total': 4
        }, {
            'athlete': 'Kirsty Coventry',
            'age': 24,
            'country': 'Zimbabwe',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 1,
            'silver': 3,
            'bronze': 0,
            'total': 4
        }, {
            'athlete': 'Libby Lenton-Trickett',
            'age': 23,
            'country': 'Australia',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 1,
            'bronze': 1,
            'total': 4
        }, {
            'athlete': 'Ryan Lochte',
            'age': 24,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 0,
            'bronze': 2,
            'total': 4
        }];
        // });
    }

    rowsSelected() {
        return this.gridApi && this.gridApi.getSelectedRows().length > 0;
    }

    deleteSelectedRows() {
        const selectRows = this.gridApi.getSelectedRows();
        console.log('selected row', selectRows)
    }

    editRow() {
        this.display = 'block';
        this.selectedData = this.gridApi.getSelectedRows()[0];
        console.log('selected row', this.selectedData);
    }

    onCloseHandled() {
        this.display = 'none';
        document.getElementById('close_popup').style.display  = 'none';
        document.getElementById('route_popup').style.display  = 'none';
        document.getElementById('add_case').style.display  = 'none';
    }

    onCellDoubleClicked(e) {
        console.log('event', e);
        this.router.navigate(['/dashboard']);
    }

    getContextMenuItems(params) {
        var result = [
            {
                name: 'Close Selected',
                action: function () {
                    document.getElementById('close_popup').style.display = 'block'
                },
            },
            {
                name: 'Route Selected',
                action: function() {
                    document.getElementById('route_popup').style.display = 'block'
                },
            },
            {
                name: 'Add to case',
                action: function() {
                    document.getElementById('add_case').style.display = 'block'
                },
            },
            'copy',
        ];
        return result;
    }

}
