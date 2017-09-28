import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { List } from 'app/shared/domain/list';
import { ListService } from 'app/layout/list/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy  {
  list: FirebaseObjectObservable<any>;


  private sub: any;
  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.listService.setListKey(params['key']);

      this.getList();
   });    
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  getList(){
    this.list =this.db.object('/lists/' + this.listService.getListKey());
  }

}
