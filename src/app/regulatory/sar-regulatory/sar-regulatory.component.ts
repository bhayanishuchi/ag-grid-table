import {Component, OnInit, ViewChild} from '@angular/core';
import {RegulatoryService} from '../../services/regulatory.service';
import {DxDataGridComponent} from 'devextreme-angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sar-regulatory',
  templateUrl: './sar-regulatory.component.html',
  styleUrls: ['./sar-regulatory.component.scss']
})
export class SarRegulatoryComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
   selectedSar;
  reggrid;
  regData: any = {};
  alDetails: any = {};
  FIActivityLoc;
  SuspActivity: any = {
      CyberEvent: {},
      Fraud: {},
      Gaming: {},
      InstrumentTypes: {},
      Insurance: {},
      MnyLaund: {},
      MortFraud: {},
      ProductTypes: {},
      SecFutOpt: {},
      Structuring: {},
      TerrFinan: {},
  };
  currentFilter: any;
  showFilterRow: boolean;
  showPage = false;
  constructor(private regulatoryService: RegulatoryService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
      this.activateRoute.queryParams.subscribe((data) => {
          console.log('data.stack', data.id);
          this.selectedSar = data.id;
      });
      if (this.selectedSar !== undefined) {
          this.getSARCases(this.selectedSar);
      }
      this.regData.SuspActivity = {}
  }

  getSARCases(sarId) {

    this.regulatoryService.sarRegulatory(sarId)
        .subscribe((res) => {
          console.log('detailalert', res);
          if (res) {
            this.regData = res[0];
            this.showPage = true;
            this.alDetails = res[0];
          }
        }, error => {
          console.log('error', error);
        })
  }

  saveSARDetails(data) {

  }
}
