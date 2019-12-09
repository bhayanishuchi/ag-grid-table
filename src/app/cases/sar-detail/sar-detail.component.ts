import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {CasesService} from '../../services/cases.service';
import {ActivatedRoute} from '@angular/router';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
  selector: 'app-sar-detail',
  templateUrl: './sar-detail.component.html',
  styleUrls: ['./sar-detail.component.scss']
})
export class SarDetailComponent implements OnInit {
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

    reggrid;
    regData;
    alDetails: any = {};
    selectedCase;
    FIActivityLoc;
    currentFilter: any;
    showFilterRow: boolean;
    showPage = false;

    constructor(private casesService: CasesService,
                private activateRoute: ActivatedRoute) {
        this.showFilterRow = true;
    }

  ngOnInit() {
      this.activateRoute.queryParams.subscribe((data) => {
          console.log('data.stack', data.id);
          this.selectedCase = data.id;
      });
      if (this.selectedCase !== undefined) {
          this.getSARCases(this.selectedCase);
      }
  }

  getSARCases(alertId) {
        this.casesService.sarCases(alertId)
            .subscribe((res) => {
                console.log('detailalert', res);
                console.log('detailalert', res[0].reggrid[0]);
                console.log('detailalert', res[0].fii.FIContactInfo.FIInfo.TypeOfSec);
                if (res) {
                    this.regData = res[0];
                    this.reggrid = res[0].reggrid[0];
                    this.FIActivityLoc = res[0].FIActivityLoc;
                    console.log('this.reggrid', this.reggrid);
                    console.log('this.regData', this.regData);
                    console.log('this.FIActivityLoc', this.FIActivityLoc);
                    this.showPage = true;
                    this.alDetails = res[0].alDetails;
                }
            }, error => {
                console.log('error', error);
            })
    }

}
