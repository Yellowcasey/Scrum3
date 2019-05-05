import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import { VocabularyService } from 'src/app/vocabulary.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  providers: [VocabularyService]
})
export class ActivityPage implements OnInit {
  vocabulary: Observable<any>;
  constructor(private vocabularyService:VocabularyService) { }

  ngOnInit() {
    this.vocabulary = this.vocabularyService.itemsRef;
  }

}
