import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  itemsRef: Observable<any>;
  words: Observable<any[]>;

  constructor(public afDB: AngularFireDatabase) {
    //Six hours later, and I still dont know what is going on here, but it works.
    this.itemsRef = afDB.object('/vocabulary').valueChanges();
    this.words= afDB.list('/vocabulary/').snapshotChanges(); 
    console.log(this.itemsRef)
    
    
  }
}


