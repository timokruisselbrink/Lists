import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'app/shared/domain/list';
import { ListService } from 'app/layout/list/list.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Share } from 'app/shared/domain/share';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy  {
    public shares: FirebaseListObservable<any[]>;
    public list: FirebaseObjectObservable<any>;

    public addShareEmail:string;
    

    private sub: any;
    constructor(
        private db: AngularFireDatabase, 
        private route: ActivatedRoute, 
        private listService: ListService,
        private modalService: NgbModal,
        private router: Router,
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.listService.setListKey(params['key']);

            this.getList();
        });    
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getList(){
        this.list =this.db.object('/lists/' + this.listService.getListKey());
    }

    openDeleteModal(content) {
        this.modalService.open(content).result.then((result) => {
            if(result == true){
                this.list.remove();
                this.router.navigateByUrl("home");
            }
        });
    }
    
    openShareModal(content) {
        this.getShares();

        this.modalService.open(content).result.then((result) => {
            if(result == true){
                
            }
        });
    }

    addShare(){
        let share:Share = new Share();
        share.email = this.addShareEmail;
        this.shares.push(share);
    }

    deleteShare(share){
        this.shares.remove(share.$key);
    }

    getShares(){
        if(this.shares == undefined){
            this.shares = this.db.list('/lists/' + this.listService.getListKey() + '/shares/');
        }       
    }

}
