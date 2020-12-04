import { Component, OnInit } from '@angular/core';
import { Word } from './anagrams/model/word.model';
import { AnagramsService } from './anagrams/service/anagrams.service';
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnagramsService]
})
export class AppComponent implements OnInit {
  title = 'plytixAnagramsClient';
  words: Word[] = [];

  constructor(private anagramService: AnagramsService) {}

  ngOnInit() {
    const wordObservable = this.anagramService.retrieveWords();
    wordObservable.subscribe((wordsData: Word[]) => {
      this.words = wordsData;
    });
  }

  keyPress(e) {
    if (e.keyCode == 32) {
      // Space
      return false;
    }
  }

  onKey(e) {
    var code = e.keyCode;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.words, event.previousIndex, event.currentIndex);
  }
}
