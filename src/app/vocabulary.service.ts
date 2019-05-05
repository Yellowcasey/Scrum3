import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  vocabulary: AngularFireList<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.vocabulary = database.list<any[]>('vocabulary');
  }

  getVocabulary(): AngularFireList<any[]> {
    console.log(JSON.stringify(this.vocabulary));
    return this.vocabulary;

  }
}
