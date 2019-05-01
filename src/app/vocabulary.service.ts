import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class VocabularyService {
  vobaulary: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.vocabulary = database.list('vocabulary');
  }

  getVocabulary(){
    return this.vocabulary;
  }
}
