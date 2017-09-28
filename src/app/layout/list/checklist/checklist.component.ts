import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Query } from 'angularfire2/database/interfaces';
import 'rxjs/add/operator/first';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'app/layout/list/list.service';
import { Checklist, ChecklistItem } from 'app/shared/domain/list-types/checklist';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checklistItems: FirebaseListObservable<any[]>;


  public item:string;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute,private listService: ListService) {   }

  ngOnInit() { 
    this.checklistItems = this.db.list('/checklists/' + this.listService.getListKey() + '/items');
  } 
  
  addItem(){
    const newChecklistItem = new ChecklistItem();
    newChecklistItem.checked = false;
    newChecklistItem.text = this.item;

    this.checklistItems.push(newChecklistItem);

    this.item = "";
  }

  itemChecked(item){
    item.checked = item.checked == true ? false : true;
    this.checklistItems.update(item.$key, item);
  }

  remove(item){
    this.checklistItems.remove(item.$key);
  }
}
