import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Taxehabitation} from '../taxehabitation';

@Injectable({
  providedIn: 'root'
})
export class TaxehabitationserviceService {

  protected host:string="http://localhost:8084";

  url :string="/afficherNatureTh";

  urlpost:string="/ajouterNatureTh";

  urlpatch:string="/apiappliance/modificationAppliance/";

  constructor(private http:HttpClient) { }

  afficherhabitation():Observable<any>
  {
    return this.http.get(this.host+this.url)
  }

  ajoutertaxehabitationnaturel(taxehabitationnaturel:Taxehabitation):Observable<any>
  {
    return this.http.post(this.host+this.urlpost,taxehabitationnaturel);
  }
}
