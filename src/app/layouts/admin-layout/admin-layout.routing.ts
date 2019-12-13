import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AgGridComponent} from '../../ag-grid/ag-grid.component';
import {MyAlertsComponent} from '../../my-alerts/my-alerts.component';
import {AvailableAlertComponent} from '../../available-alert/available-alert.component';
import {ClosedAlertComponent} from '../../closed-alert/closed-alert.component';
import {SuppressedAlertComponent} from '../../suppressed-alert/suppressed-alert.component';
import {NewAlertComponent} from '../../new-alert/new-alert.component';
import {DetailAlertComponent} from '../../detail-alert/detail-alert.component';
import { MyCasesComponent } from '../../cases/my-cases/my-cases.component';
import { DetailCaseComponent } from '../../cases/detail-case/detail-case.component';
import {SarDetailComponent} from '../../cases/sar-detail/sar-detail.component';
import {AvailableCasesComponent} from '../../cases/available-cases/available-cases.component';
import {FiledCasesComponent} from '../../cases/filed-cases/filed-cases.component';
import {ClosedCasesComponent} from '../../cases/closed-cases/closed-cases.component';
import { ReportComponent } from '../../regulatory/report/report.component';
import { EFilesComponent } from '../../regulatory/e-files/e-files.component';
import { SarRegulatoryComponent } from '../../regulatory/sar-regulatory/sar-regulatory.component';
import { UsersComponent } from '../../administration/users/users.component';
import { ScenariosComponent } from '../../administration/scenarios/scenarios.component';
import { ScenariosDetailComponent } from '../../administration/scenarios-detail/scenarios-detail.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'ag',      component: AgGridComponent },
    { path: 'myAlerts',      component: MyAlertsComponent },
    { path: 'availAlerts',      component: AvailableAlertComponent },
    { path: 'closedAlerts',      component: ClosedAlertComponent },
    { path: 'suppressedAlerts',      component: SuppressedAlertComponent },
    { path: 'newAlerts',      component: NewAlertComponent },
    { path: 'dtlAlerts',      component: DetailAlertComponent },
    { path: 'myCases',      component: MyCasesComponent },
    { path: 'dtlCases',      component: DetailCaseComponent },
    { path: 'sarCases',      component: SarDetailComponent },
    { path: 'availCases',      component: AvailableCasesComponent },
    { path: 'filedCases',      component: FiledCasesComponent },
    { path: 'closedCases',      component: ClosedCasesComponent },
    { path: 'efiles',      component: EFilesComponent },
    { path: 'reports',      component: ReportComponent },
    { path: 'regulatorySar',      component: SarRegulatoryComponent },
    { path: 'users',      component: UsersComponent },
    { path: 'scenario',      component: ScenariosComponent },
    { path: 'dtlscenarios',      component: ScenariosDetailComponent },

];
