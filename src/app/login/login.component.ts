import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { routerTransition } from '../router.animations';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, public afAuth: AngularFireAuth) { }
    
    email:string = 'timokruisselbrink@hotmail.com';
    password:string = 'test123';

    ngOnInit() {
    }

    onLoggedin() {
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(result => {

              this.router.navigate(["/my-recipes"])
     
            
          }).catch(result => {
                //todo
          });
    }

}
