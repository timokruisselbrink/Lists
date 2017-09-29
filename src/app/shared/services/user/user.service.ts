import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  constructor(private afAuth: AngularFireAuth) { }

  getDisplayName(): string{
    return this.afAuth.auth.currentUser.displayName;    
  }

}
