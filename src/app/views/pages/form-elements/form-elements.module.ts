import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeahterIconModule } from '../../../core/feather-icon/feather-icon.module';

// ngx-quill
import { QuillModule } from 'ngx-quill';

// angular-archwizard
import { ArchwizardModule } from 'angular-archwizard';


import { FormElementsComponent } from './form-elements.component';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { EditorsComponent } from './editors/editors.component';
import { WizardComponent } from './wizard/wizard.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { PvcDecissionComponent } from './pvc-decission/pvc-decission.component';
import { PvcObjectRequetComponent } from './pvc-object-requet/pvc-object-requet.component';
import { PvcEvenementComponent } from './pvc-evenement/pvc-evenement.component';

const routes: Routes = [
  {
    path: '',
    component: FormElementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'wizard',
        pathMatch: 'full'
      },
      {
        path: 'basic-elements',
        component: BasicElementsComponent
      },
      {
        path: 'editors',
        component: EditorsComponent
      },
      {
        path: 'wizard',
        component: WizardComponent
      },
      {
        path: 'pvcdecission',
        component: PvcDecissionComponent
      }
      ,
      {
        path: 'pvcobjectrequete',
        component: PvcObjectRequetComponent
      }
      ,
      {
        path: 'pvcevenement',
        component: PvcEvenementComponent
      }
    ]
  }
]

@NgModule({
  declarations: [FormElementsComponent, BasicElementsComponent, EditorsComponent, WizardComponent, PvcDecissionComponent, PvcObjectRequetComponent, PvcEvenementComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FeahterIconModule,
        QuillModule.forRoot(), // ngx-quill
        ArchwizardModule,
        NgSelectModule,
        // angular-archwizard
    ]
})
export class FormElementsModule { }
