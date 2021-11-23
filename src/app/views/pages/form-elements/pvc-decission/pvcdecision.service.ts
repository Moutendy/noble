import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Taxehabitation} from "../taxe-habitation/taxehabitation";
import {Pvcdecision} from "./pvcdecision";

@Injectable({
  providedIn: 'root'
})
export class PvcdecisionService {

  protected host:string="http://localhost:8084";

  url :string="/afficherpvcDecision";

  urlpost:string="/ajouterpvcDecisionService";

  urlpatch:string="/apiappliance/modificationAppliance/";

  constructor(private http:HttpClient) { }

  afficherdecision():Observable<Pvcdecision>
  {
    // @ts-ignore
    return this.http.get(this.host+this.url)
  }

  ajouterdecision(pvcdecision:Pvcdecision):Observable<any>
  {
    console.log(pvcdecision);
    return this.http.post(this.host+this.urlpost,pvcdecision);
  }


}
