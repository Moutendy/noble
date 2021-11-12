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
  private menu=[{title:"Home",url:"/menu/home",icon:'share'},
    {title:"Meteo",url:"/menu/meteo",icon:'snow'},
    {title:"Gallery",url:"/menu/gallery",icon:'school'},
    {title:"Locations",url:"/menu/locations",icon:'sync'},
    {title:"Logout",url:"logout",icon:'log-out'},
    {title:"Exit",url:"Exit",icon:'power'},

    {title:"Locat",url:"/menu/locations",icon:'sync'},
    {title:"Logt",url:"logot",icon:'log-out'},
    {title:"E",url:"Exit",icon:'power'},
  ]
  pageSize: string | number=3;
  p: number=1;
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

  //la methode de pagination
  pageChanged($event: number)
  {
    //Go top
    window.scrollTo(0, 200);
    //Get nombre of paggination
    this.p = $event;
  }


}
