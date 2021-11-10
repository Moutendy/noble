import { Component, OnInit } from '@angular/core';
import {TaxehabitationserviceService} from '../../form-elements/taxe-habitation/taxe-habitation/taxehabitationservice.service';
import {Taxehabitation} from '../../form-elements/taxe-habitation/taxehabitation';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],

})
export class DataTableComponent implements OnInit {

  private taxehabitationdto:Array<Taxehabitation>;
  pageSize: string | number=3;
  p: string | number=1;
  total: string | number;

  constructor(private taxehabitationserviceService:TaxehabitationserviceService) { }

  ngOnInit(): void {
    this.affichertaxehabitation()
  }
  affichertaxehabitation():Observable<Taxehabitation>
  {
    this.taxehabitationdto=new Array<Taxehabitation>();
    // @ts-ignore
    return this.taxehabitationserviceService.afficherhabitation().pipe(take(1)).subscribe(data=>{this.taxehabitationdto=data
    console.log(data)
    this.total=this.taxehabitationdto.length});
  }

  pageChanged($event: number) {
    
  }
}
