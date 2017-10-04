import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from 'app/shared/services/user/user.service';

@Injectable()
export class ListService {

  constructor(private db: AngularFireDatabase, private userService: UserService) { }

  getListsForUser(){
   return this.db.list('/lists', {
     query: {
       orderByChild: 'uid',
       equalTo: this.userService.getUID()
     }
   });
  }

  getSharedListsForUser(){
    return this.db.list('/lists/', {
      query: {
        orderByChild: 'shares/email',
        equalTo: "test@test.test"
      }
    });
  }

}
