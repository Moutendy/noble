import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardComponent as BaseWizardComponent} from 'angular-archwizard/lib/components/wizard.component';
import {passBoolean} from 'protractor/built/util';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-pvc-decission',
  templateUrl: './pvc-decission.component.html',
  styleUrls: ['./pvc-decission.component.scss']
})
export class PvcDecissionComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) {
  }

  private static isForm1Submitted: boolean;
  private static isForm2Submitted: boolean;

  private static validationForm1: FormGroup;
  private static validationForm2: FormGroup;


  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  validationForm1 = this.formBuilder.group({
    date_decision: ['', Validators.required],
    numero_decision: ['', Validators.required]
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
    alert('Successfully Completed');
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

