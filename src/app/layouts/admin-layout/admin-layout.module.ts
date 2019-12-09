import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AgGridComponent} from '../../ag-grid/ag-grid.component';
import {AgGridModule} from '@ag-grid-community/angular';
import {AdminLayoutComponent} from './admin-layout.component';
import {MyAlertsComponent} from '../../my-alerts/my-alerts.component';
import {DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule} from 'devextreme-angular';
import {Service} from '../../services/data.services';
import {AvailableAlertComponent} from '../../available-alert/available-alert.component';
import {ClosedAlertComponent} from '../../closed-alert/closed-alert.component';
import {SuppressedAlertComponent} from '../../suppressed-alert/suppressed-alert.component';
import {NewAlertComponent} from '../../new-alert/new-alert.component';
import {DetailAlertComponent} from '../../detail-alert/detail-alert.component';
import { MyCasesComponent } from '../../cases/my-cases/my-cases.component';
import { DetailCaseComponent } from '../../cases/detail-case/detail-case.component';
import { SarDetailComponent } from '../../cases/sar-detail/sar-detail.component';
import { AvailableCasesComponent } from '../../cases/available-cases/available-cases.component';
import { FiledCasesComponent } from '../../cases/filed-cases/filed-cases.component';
import { ClosedCasesComponent } from '../../cases/closed-cases/closed-cases.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    AgGridModule.withComponents([]),
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    UpgradeComponent,
    AgGridComponent,
    MyAlertsComponent,
    AvailableAlertComponent,
    ClosedAlertComponent,
    SuppressedAlertComponent,
    NewAlertComponent,
    DetailAlertComponent,
    MyCasesComponent,
    DetailCaseComponent,
    SarDetailComponent,
    AvailableCasesComponent,
    FiledCasesComponent,
    ClosedCasesComponent,
  ],
  providers: [Service]
})

export class AdminLayoutModule {}
