import { Component, OnInit } from '@angular/core';
import {PvcevenementService} from '../pvcevenementservice/pvcevenement.service';
import {date} from 'ngx-custom-validators/src/app/date/validator';
import {Pvcevenement} from './pvcevenement';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-pvcevenement',
  templateUrl: './pvcevenement.component.html',
  styleUrls: ['./pvcevenement.component.scss']
})
export class PvcevenementComponent implements OnInit {

  private evenement:Pvcevenement;
  constructor(private serviceevement:PvcevenementService) { }

  ngOnInit(): void {
    this.afficherevenement();
  }

  afficherevenement()
  {
    return this.serviceevement.afficherEvenement().pipe(take(1)).subscribe(date=>{this.evenement=date
    console.log(this.evenement)});
  }
}
