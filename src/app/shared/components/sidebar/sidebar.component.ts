import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { List } from 'app/shared/domain/list';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    lists: FirebaseListObservable<List[]>;

    constructor(public router: Router, public afAuth: AngularFireAuth, db: AngularFireDatabase) {
        this.lists = db.list('/lists');
    }


    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    onSignOut() {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl("login");
    }

    
}
