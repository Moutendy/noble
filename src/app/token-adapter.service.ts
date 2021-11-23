import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise'
import {SecuritekeycloakService} from "./securitekeycloak.service";

@Injectable({
  providedIn: 'root'
})
export class TokenAdapterService implements HttpInterceptor{

  constructor(public keycloak: SecuritekeycloakService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return (<any>Observable).fromPromise(this.keycloak.getToken()).mergeMap((token : any) => {
      const req: HttpRequest<any> = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(req);
    });
  }




}
