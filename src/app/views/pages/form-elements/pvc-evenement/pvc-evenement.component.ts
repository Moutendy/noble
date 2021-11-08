import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardComponent as BaseWizardComponent} from 'angular-archwizard/lib/components/wizard.component';

@Component({
  selector: 'app-pvc-evenement',
  templateUrl: './pvc-evenement.component.html',
  styleUrls: ['./pvc-evenement.component.scss']
})
export class PvcEvenementComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  private static isForm1Submitted: boolean;
  private static isForm2Submitted: boolean;

  private static validationForm1: FormGroup;
  private static validationForm2: FormGroup;
  validationForm1=this.formBuilder.group(
    {
      date : ['', Validators.required],
      typeevenement : ['', Validators.required],
      refrequete : ['', Validators.required]
 });

  validationForm2 = this.formBuilder.group({
    email: ['', [Validators.required]],
    mobileNumber: ['', Validators.required],
    password: ['', Validators.required]
  });

  isForm1Submitted = false;

  get form1() {
    return this.validationForm1.controls;
  }


  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  ngOnInit(): void {
  }

  finishFunction() : void
  {

  }

  form1Submit() {
    console.log(this.validationForm1)
    if (this.validationForm1.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm1Submitted = true;
  }
}
