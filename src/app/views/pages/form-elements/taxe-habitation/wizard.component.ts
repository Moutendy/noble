import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';
import {TaxehabitationserviceService} from './taxe-habitation/taxehabitationservice.service';
import {Taxehabitation} from './taxehabitation';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  validationForm1: FormGroup;
  validationForm2: FormGroup;

  // tslint:disable-next-line:ban-types
  isForm1Submitted: Boolean;
  // tslint:disable-next-line:ban-types
  isForm2Submitted: Boolean;

  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  constructor(public formBuilder: FormBuilder,private taxehabiationanturel:TaxehabitationserviceService,private router:Router) { }

  ngOnInit(): void {

    /**
     * form1 value validation
     */
    this.validationForm1 = this.formBuilder.group({
      code : ['', Validators.required],
      libelle : ['', Validators.required],
      dateEffet : ['', Validators.required],
      dateFin : ['', Validators.required],
      validite : ['', Validators.required]
    });

    /**
     * formw value validation
     */
    this.validationForm2 = this.formBuilder.group({
      email : ['', [Validators.required]],
      mobileNumber : ['', Validators.required],
      password : ['', Validators.required]
    });

    this.isForm1Submitted = false;
    this.isForm2Submitted = false;

  }

  /**
   * Wizard finish function
   */
  finishFunction()
  {
   this.router.navigateByUrl('/acceuil/tables/taxe_naturel_habitaion')
  }

  /**
   * Returns form
   */
  get form1() {
    return this.validationForm1.controls;
  }

  /**
   * Returns form
   */
  get form2() {
    return this.validationForm2.controls;
  }

  /**
   * Go to next step while form value is valid
   */
  form1Submit() {

    if(this.validationForm1.valid)
    {
      this.wizardForm.goToNextStep();
      console.log( this.validationForm1.value);
      this.taxehabiationanturel.ajoutertaxehabitationnaturel(this.validationForm1.value).pipe(take(1)).subscribe()
    }
    this.isForm1Submitted = true;
  }

  /**
   * Go to next step while form value is valid
   */
  form2Submit() {
    if(this.validationForm2.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm2Submitted = true;
  }


}
