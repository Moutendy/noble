import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personne} from './personne';

@Injectable({
  providedIn: 'root'
})
export class LoginkeycloakService {

  private upost="http://localhost:8099/api/AppUsers/login"
  constructor(private http:HttpClient) { }

  login(user:Personne)
  {
    if(this.http.post(this.upost,user))
    return true;
    else return false;
  }
}
