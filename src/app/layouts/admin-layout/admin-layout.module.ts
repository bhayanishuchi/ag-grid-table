import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AgGridComponent} from '../../ag-grid/ag-grid.component';
import {AgGridModule} from '@ag-grid-community/angular';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    AgGridModule.withComponents([])
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    UpgradeComponent,
    AgGridComponent,
  ]
})

export class AdminLayoutModule {}
