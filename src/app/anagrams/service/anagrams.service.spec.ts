import { TestBed } from '@angular/core/testing';

import { AnagramsService } from './anagrams.service';

describe('AnagramsService', () => {
  let service: AnagramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
