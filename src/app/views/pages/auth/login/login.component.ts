import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SecuritekeycloakService} from '../../../../securitekeycloak.service';
import {LoginkeycloakService} from './loginkeycloak.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Personne} from './personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: FormGroup;
  returnUrl: any;




  constructor(public formBuilder:FormBuilder,private router: Router, private route: ActivatedRoute,public keycloak: SecuritekeycloakService,private servicelogin:LoginkeycloakService ) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/acceuil/general/blank-page';

    this.user= this.formBuilder.group({
      username :'',
      password:'',
    });
  }


  // @ts-ignore
  async onLoggedin(e:user):Promise<Personne>{
    localStorage.setItem('token', await this.keycloak.getToken());
    let token=localStorage.getItem('token');
    console.log(token);
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    this.servicelogin.login(e)
    if(this.servicelogin.login(e))
    {
    this.router.navigate([this.returnUrl]);
    }
  }

}
