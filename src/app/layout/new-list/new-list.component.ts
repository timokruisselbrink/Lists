import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { List } from 'app/shared/domain/list';
import { Router } from '@angular/router';
import { Checklist } from 'app/shared/domain/list-types/checklist';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  lists: FirebaseListObservable<List[]>;
  types: FirebaseListObservable<any[]>;

  newList: List = new List();

  constructor(public db: AngularFireDatabase, public router: Router) { }

  ngOnInit() {
    this.types = this.db.list('/types');
    this.lists = this.db.list('/lists');
  }

  onCreateList(){
    alert(this.newList.type);
    this.lists.push(this.newList).then((list) => {      
      switch (this.newList.type)
      {
        case "Checklist" :
          this.createChecklist(list.key);
          break;      
      }
  
      this.router.navigate(['/list', this.newList.type, list.key]);
    });    
  }

  createChecklist(key){
    const newChecklist = new Checklist();
    newChecklist.id = key;

    const checklists = this.db.list('/checklists');
    checklists.push(newChecklist)
  }

}
