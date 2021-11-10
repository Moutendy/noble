import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardComponent as BaseWizardComponent} from 'angular-archwizard/lib/components/wizard.component';
import {PvcevenementService} from '../../tables/pvcevenementservice/pvcevenement.service';
import {Pvcevenement} from '../../tables/pvcevenement/pvcevenement';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pvc-evenement',
  templateUrl: './pvc-evenement.component.html',
  styleUrls: ['./pvc-evenement.component.scss']
})
export class PvcEvenementComponent implements OnInit {

  private evenement:Pvcevenement;
  constructor(public formBuilder: FormBuilder,private serviceevement:PvcevenementService,private router:Router) { }

  private static isForm1Submitted: boolean;
  private static isForm2Submitted: boolean;

  private static validationForm1: FormGroup;
  private static validationForm2: FormGroup;
  validationForm1=this.formBuilder.group(
    {
      dateEvenement : ['', Validators.required],
      refTypeEvenement : ['', Validators.required],
      refRequete : ['', Validators.required]
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
   this.router.navigateByUrl('acceuil/tables/pvcevenement')
  }

  form1Submit() {

    if (this.validationForm1.valid) {
      this.wizardForm.goToNextStep();
      this.evenement=this.validationForm1.value;
      console.log(this.evenement);
      this.serviceevement.ajouterEvenement(this.validationForm1.value).subscribe();
    }
    this.isForm1Submitted = true;
  }
}
