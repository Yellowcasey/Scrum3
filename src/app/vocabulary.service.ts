import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  vocabulary: AngularFireList<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.vocabulary = database.list('vocabulary');
  }

  getVocabulary(){
    return this.vocabulary;
  }
}
