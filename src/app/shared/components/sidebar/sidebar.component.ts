import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import { List } from 'app/shared/domain/list';
import { ListService } from 'app/shared/services/list/list.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{    
    lists: FirebaseListObservable<List[]>;
    sharedLists: FirebaseListObservable<List[]>;

    constructor(public router: Router, public afAuth: AngularFireAuth, private listService: ListService) {
        
    }

    ngOnInit(): void {
        this.lists = this.listService.getListsForUser();
        this.sharedLists = this.listService.getSharedListsForUser();
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
