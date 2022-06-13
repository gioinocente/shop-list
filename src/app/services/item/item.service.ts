import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firebase: AngularFireDatabase) { }

  insert(item: Item){
    this.firebase.list('itens').push(item).then((result: any) => {
      console.log(result.key);
    })
  }

  update(item: Item, key: string){
    this.firebase.list('itens').update(key, item).catch((error: any) =>{
      console.log(error);
    })
  }

  getAll() {
    return this.firebase.list('itens')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
        })
      );
  }


  delete(key: string){
    this.firebase.object(`itens/${key}`).remove();
  }

  check(key: string){
    this.firebase.list('itens').update(key, 'checked : true').catch((error: any) =>{
      console.log(error);
    })
  }

}
