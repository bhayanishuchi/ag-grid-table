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

];
