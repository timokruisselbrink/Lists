import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  private listKey:string;

  getListKey(){
    return this.listKey;
  }

  setListKey(key){
    this.listKey = key;
  }

}
