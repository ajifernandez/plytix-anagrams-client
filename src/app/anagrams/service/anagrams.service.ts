import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnagramsService {
    
  apiAnagramsURL: string = 'http://127.0.0.1:5000/api/anagrams';

  words: String[] = [];

  constructor(private httpClient: HttpClient) { }

  public retrieveWords(): any {
    return this.httpClient.get<String[]>(`${this.apiAnagramsURL}/words`);
  }

  public saveWords(words: String[]) {
    return this.httpClient.post(`${this.apiAnagramsURL}/save`, words).subscribe();
  }

  public getAnagram(searchValue: string) {
    return this.httpClient.post(`${this.apiAnagramsURL}/anagrams`, searchValue);
  }

}
