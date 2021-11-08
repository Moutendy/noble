import {Component, OnInit, ViewChild} from '@angular/core';
import {Capabilities} from 'protractor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardComponent as BaseWizardComponent} from 'angular-archwizard/lib/components/wizard.component';

@Component({
  selector: 'app-pvc-object-requet',
  templateUrl: './pvc-object-requet.component.html',
  styleUrls: ['./pvc-object-requet.component.scss']
})
export class PvcObjectRequetComponent implements OnInit {


  constructor(public formBuilder: FormBuilder) { }
  private static isForm1Submitted: boolean;
  private static isForm2Submitted: boolean;

  private static validationForm1: FormGroup;
  private static validationForm2: FormGroup;


  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  validationForm1 = this.formBuilder.group({
    libelle: ['', Validators.required],
    type_evenement: ['', Validators.required],
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


  ngOnInit(): void {
  }

  finishFunction() {
    alert('Successfully Completed');
  }

  form1Submit()
  {
    if (this.validationForm1.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm1Submitted = true;
  }
}
