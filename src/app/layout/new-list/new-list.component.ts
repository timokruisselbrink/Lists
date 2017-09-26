import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { List } from 'app/shared/domain/list';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  lists: FirebaseListObservable<List[]>;
  types: FirebaseListObservable<any[]>;

  newList: List = new List();

  constructor(db: AngularFireDatabase) {
    this.types = db.list('/types');
    this.lists = db.list('/lists');
  }

  ngOnInit() {
  }

  onCreateList(){
    this.lists.push(this.newList);
  }

}
