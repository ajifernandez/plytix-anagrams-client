import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Word } from '../model/word.model';

@Injectable({
  providedIn: 'root'
})
export class AnagramsService {

  apiAnagramsURL: string = 'http://127.0.0.1:5000/api/anagrams';

  words: Word[] = [];

  constructor(private httpClient: HttpClient) { }

  public retrieveWords(): any {
    return this.httpClient.get<Word[]>(`${this.apiAnagramsURL}/words`);
  }

}
