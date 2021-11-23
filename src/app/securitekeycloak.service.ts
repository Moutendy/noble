import { Injectable } from '@angular/core';

import * as Keycloak from "keycloak-js";
import {from, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SecuritekeycloakService {
  // une variable de recuperation les information de l'utilisateur
  static auth: any = {};

  private keycloakAuth: any;

  init(): Promise<any> {
    // @ts-ignore
    return new Promise((resolve, reject)=>{
      const config = {
        url: "http://localhost:8080/auth",
        realm: "ecom-realm",
        clientId: "AngularProductApp",
      };
      //l'utilisateur n'est pas loguer
      SecuritekeycloakService.auth.loggedIn = false;
      //on instancie la configuration
      this.keycloakAuth = Keycloak(config);
      //securiser le keycloak
      this.keycloakAuth
        .init({ onLoad: 'login-required' })
        .success(() => {
          //l'utilisateur est logué
          SecuritekeycloakService.auth.loggedIn = true;
          SecuritekeycloakService.auth.authz = this.keycloakAuth;
          SecuritekeycloakService.auth.logoutUrl =
            this.keycloakAuth.authServerUrl +
            '/realms/ecom-realm' +
            '/protocol/openid-connect/logout?redirect_uri=' +
            //l'url localhost://4200
            document.baseURI;
          resolve(null);
        })
        .error(() => {
          reject();
        });
    });

  }
  static logout() {
    SecuritekeycloakService.auth.loggedIn = false;
    SecuritekeycloakService.auth.authz = null;

    window.location.href = SecuritekeycloakService.auth.logoutUrl;
  }
  //pour afficher le nom
  static getUsername(): string {
    return SecuritekeycloakService.auth.authz.tokenParsed.preferred_username;
  }
  //pour afficher le nom
  static getFullName(): string {
    return SecuritekeycloakService.auth.authz.tokenParsed.name;
  }
  //recupperer le token
  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (SecuritekeycloakService.auth.authz.token) {
        SecuritekeycloakService.auth.authz
          .updateToken(5)
          .success(() => {
            resolve(<string>SecuritekeycloakService.auth.authz.token);
          })
          .error(() => {
            SecuritekeycloakService.logout();
            reject('Failed to refresh token');
          });
      } else {
        SecuritekeycloakService.logout();
        reject('Not logged in');
      }
    });
  }

  isLoggedIn(): boolean {
    return SecuritekeycloakService.auth.authz.authenticated;
  }
//token refresh
  getUserToken() {
    const tokenPromise: Promise<string> = this.getToken();
    const tokenObservable: Observable<string> = from(tokenPromise);
    return tokenObservable;
  }
//retourner le role
  getRolesRealm() {
    if (SecuritekeycloakService.auth.authz.tokenParsed.realm_access !== undefined &&
      SecuritekeycloakService.auth.authz.tokenParsed.realm_access.roles !== undefined) {
      return SecuritekeycloakService.auth.authz.tokenParsed.realm_access.roles;
    }
  }

  //retourner les roles
  getRolesRessource(): [] {
    const resource_access: any = SecuritekeycloakService.auth.authz.tokenParsed.resource_access;
    const clientId = "AngularProductApp";
    if (resource_access !== undefined) {
      for (const [key, value] of Object.entries(resource_access)) {
        if (key === clientId) {
          const client: any = value;
          return client.roles as [];
        }
      }
    }
    return [];
  }

  constructor() { }

}
