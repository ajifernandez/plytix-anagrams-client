import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

import { AnagramsService } from './anagrams/service/anagrams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnagramsService],
})
export class AppComponent implements OnInit {
  title = 'plytixAnagramsClient';
  words: String[] = [];

  constructor(private anagramService: AnagramsService) {}

  ngOnInit() {
    const wordObservable = this.anagramService.retrieveWords();
    wordObservable.subscribe((wordsData: String[]) => {
      this.words = wordsData;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.words, event.previousIndex, event.currentIndex);
    this.anagramService.saveWords(this.words);
  }

  onSearchChange(searchValue: string): void {
    const elements = Array.from(document.getElementsByClassName('word-box'));
    const response = this.anagramService.getAnagram(searchValue);
    response.subscribe((words: String[]) => {
      for (let entry of elements) {
        entry.classList.remove('word-selected-box'); // restore class
      }
      if (words[0] != '-') {
        for (let w of words) {
          for (let entry of elements) {
            if(entry.textContent.toUpperCase().trim() === w.toUpperCase().trim()){
              entry.classList.add('word-selected-box'); // add another clasee
            }
          }
        }
      }
    });
  }
}
