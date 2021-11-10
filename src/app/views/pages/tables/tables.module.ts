import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableComponent } from './taxe_naturel_habitaion/data-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PvcdecisionComponent } from './pvcdecision/pvcdecision.component';
import { PvcobjectrequeteComponent } from './pvcobjectrequete/pvcobjectrequete.component';
import { PvcevenementComponent } from './pvcevenement/pvcevenement.component';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: '',
        redirectTo: 'taxe_naturel_habitaion',
        pathMatch: 'full'
      },
      {
        path: 'pvcobjectrequete',
        component: PvcobjectrequeteComponent
      },
      {
        path: 'taxe_naturel_habitaion',
        component: DataTableComponent
      },
      {
        path: 'pvcdecision',
        component: PvcdecisionComponent
      },
      {
        path:'pvcevenement',
        component:PvcevenementComponent
      }
    ]
  }
]

@NgModule({
  declarations: [TablesComponent, BasicTableComponent, DataTableComponent, NgxDatatableComponent, PvcdecisionComponent, PvcobjectrequeteComponent, PvcevenementComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxDatatableModule,
        NgxPaginationModule
    ]
})
export class TablesModule { }
