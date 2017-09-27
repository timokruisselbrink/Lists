import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { List } from 'app/shared/domain/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lists: FirebaseListObservable<List[]>;

  constructor(db: AngularFireDatabase) {
    this.lists = db.list('/lists');
  }

  ngOnInit() {
  }

}
