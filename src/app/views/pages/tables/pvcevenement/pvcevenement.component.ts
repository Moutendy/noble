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

  private evenementdto:Array<Pvcevenement>;
  total: string | number;
  p: number=1;
  constructor(private serviceevement:PvcevenementService) { }

  ngOnInit(): void {
    this.afficherevenement();
  }

  afficherevenement()
  {
    return this.serviceevement.afficherEvenement().pipe(take(1)).subscribe(date=>{ // @ts-ignore
      this.evenementdto=date
    console.log(this.evenementdto)
      this.total=this.evenementdto.length});
  }

  pageChanged($event: number) {
    //Go top
    window.scrollTo(0, 200);
    //Get nombre of paggination
    this.p = $event;

  }
}
