import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {AdministrationService} from '../../services/administration.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-scenarios-detail',
  templateUrl: './scenarios-detail.component.html',
  styleUrls: ['./scenarios-detail.component.scss']
})
export class ScenariosDetailComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  scnData;
  selectedScenario;
  showFilterRow: boolean;
  showPage = false;

  constructor(private administrationService: AdministrationService,
              private activateRoute: ActivatedRoute) {
    this.showFilterRow = true;
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe((data) => {
      console.log('data.stack', data.id);
      this.selectedScenario = data.id;
    });
    if (this.selectedScenario !== undefined) {
      // this.getDetailelScenario(this.selectedScenario);
    }
  }

  // getDetailelScenario(ScenarioId) {
  //   this.administrationService.getdtlScenario(ScenarioId)
  //       .subscribe((res) => {
  //         console.log('detail Scenario', res);
  //         if (res) {
  //           this.scnData = res[0];
  //           this.showPage = true;
  //         }
  //       }, error => {
  //         console.log('error', error);
  //       })
  // }

}
