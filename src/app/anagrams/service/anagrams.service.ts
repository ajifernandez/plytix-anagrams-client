import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnagramsService {
    
  apiAnagramsURL: string = 'http://127.0.0.1:5000/api/anagrams';

  words: String[] = [];

  constructor(private httpClient: HttpClient) { }

  /**
   * Get all the words from the server
   */
  public retrieveWords(): any {
    return this.httpClient.get<String[]>(`${this.apiAnagramsURL}/words`);
  }

  /**
   * Save the order of the words
   * @param words the words sorted
   */
  public saveWords(words: String[]) {
    return this.httpClient.post(`${this.apiAnagramsURL}/save`, words).subscribe();
  }

  /**
   * Get the list of words that fit with the anagram of the word
   * @param searchValue word
   */
  public getAnagram(searchValue: string) {
    return this.httpClient.post(`${this.apiAnagramsURL}/anagrams`, searchValue);
  }

}
