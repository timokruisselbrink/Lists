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
    
    containerClass:string;
    errorMessageRegister:string[] = new Array();
    registerHasError:boolean;

    email:string = 'timokruisselbrink@hotmail.com';
    password:string = 'test123';

    emailRegister:string;
    passwordRegister:string;
    repeatPasswordRegister:string;
    firstNameRegister:string;
    lastNameRegister:string;

    ngOnInit() {
    }

    onRegisterClick(){
        this.containerClass = "active";
    }

    onCloseRegisterClick(){
        this.containerClass = "";
    }

    onLoggedin() {
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(result => {
            this.router.navigate(["/home"]); 
        }).catch(result => {
            //todo
        });
    }

    register(){
        this.registerInputIsValid();
        this.afAuth.auth.createUserWithEmailAndPassword(this.emailRegister, this.passwordRegister).then((response) => {
            // Signup success
            const user = this.afAuth.auth.currentUser;

            user.updateProfile({
                displayName: (this.firstNameRegister + " " + this.lastNameRegister),
                photoURL: ""
            }).then(() => {
                this.router.navigate(["/home"]);                
            }).catch(() => {

            });            
        }).catch((response) => {
            // Signup failed
            this.errorMessageRegister.push(response.message);
        });
    }
    
    registerInputIsValid() :boolean {
        this.errorMessageRegister = new Array();
        this.registerHasError = false;

        if(this.passwordRegister != this.repeatPasswordRegister){
            this.errorMessageRegister.push("Passwords do not match.");
        }

        if(this.errorMessageRegister.length > 0){
            this.registerHasError = true
            return false;
        }
        return true;
    }

}
