import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pvcevenement} from '../pvcevenement/pvcevenement';

@Injectable({
  providedIn: 'root'
})
export class PvcevenementService {
  protected host:string="http://localhost:8084";

  url :string="/afficherPvcEvenementCtx";

  urlpost:string="/ajouterPvcEvenementCtx";

  urlpatch:string="/apiappliance/modificationAppliance/";

  urlId:string="/apiappliance/afficherAppliance/";

  constructor(protected http:HttpClient) { }

   afficherEvenement():Observable<Pvcevenement>
   {
    return this.http.get<Pvcevenement>(this.host+this.url);
   }

   ajouterEvenement(evenement:Pvcevenement):Observable<Pvcevenement>
   {
     // @ts-ignore
     return this.http.post(this.host+this.urlpost,evenement)
   }

}
