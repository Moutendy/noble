import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardComponent as BaseWizardComponent} from 'angular-archwizard/lib/components/wizard.component';
import {passBoolean} from 'protractor/built/util';
import {PvcdecisionService} from "./pvcdecision.service";
import {take} from "rxjs/operators";
import {Pvcdecision} from "./pvcdecision";
import {Router} from "@angular/router";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-pvc-decission',
  templateUrl: './pvc-decission.component.html',
  styleUrls: ['./pvc-decission.component.scss']
})
export class PvcDecissionComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,private pvcdecision:PvcdecisionService,private router:Router) {
  }


  private static isForm1Submitted: boolean;
  private static isForm2Submitted: boolean;
     private pvcdecisiondto: Pvcdecision;
  private static validationForm1: FormGroup;
  private static validationForm2: FormGroup;


  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  validationForm1 = this.formBuilder.group({
    dateDecision: ['', Validators.required],
    numeroDecision: ['', Validators.required]
  })


  // @ts-ignore
  validationForm2 = this.formBuilder.group({
    email: ['', [Validators.required]],
    mobileNumber: ['', Validators.required],
    password: ['', Validators.required]
  });

  isForm1Submitted = false;

  isForm2Submitted = false;
  get form1() {
    return this.validationForm1.controls;
  }

  ngOnInit(): void {

  }

  finishFunction() {

    this.router.navigateByUrl("acceuil/tables/pvcdecision");
  }


  /**
   * Wizard finish function
   */


  /**
   * Returns form
   */


  /**
   * Returns form
   */


  getform2() {
    return this.validationForm2.controls;
  }

  /**
   * Go to next step while form value is valid
   */


  form1Submit() {
    if (this.validationForm1.valid) {
      this.wizardForm.goToNextStep();


      this.pvcdecisiondto=this.validationForm1.value;
      console.log(this.pvcdecisiondto)
      this.pvcdecision.ajouterdecision(this.pvcdecisiondto).pipe(take(1)).subscribe()

    }
    this.isForm1Submitted = true;
  }

  /**
   * Go to next step while form value is valid
   */

  form2Submit() {
    if (this.validationForm2.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm2Submitted = true;
  }

}

