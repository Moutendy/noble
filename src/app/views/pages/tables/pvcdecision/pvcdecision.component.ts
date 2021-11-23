import { Component, OnInit } from '@angular/core';
import {PvcdecisionService} from "../../form-elements/pvc-decission/pvcdecision.service";
import {Pvcdecision} from "../../form-elements/pvc-decission/pvcdecision";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {date} from "ngx-custom-validators/src/app/date/validator";

@Component({
  selector: 'app-pvcdecision',
  templateUrl: './pvcdecision.component.html',
  styleUrls: ['./pvcdecision.component.scss']
})
export class PvcdecisionComponent implements OnInit {

  constructor(private pvcdecision:PvcdecisionService) { }
 private pvcdecisiondto:Array<Pvcdecision>
  total: string | number;
  p: number=1;
  ngOnInit(): void
  {
this.afficherpvcdecision()
  }

  // @ts-ignore


  afficherpvcdecision():Observable<Pvcdecision>
  {

  this.pvcdecision.afficherdecision().pipe(take(1)).subscribe(date=>{ // @ts-ignore
    this.pvcdecisiondto=date
     console.log(this.pvcdecision);
    return this.pvcdecisiondto;
    })
  }

  pageChanged($event: number)
  {
//Go top
    window.scrollTo(0, 200);
    //Get nombre of paggination
    this.p = $event;
  }
}
