import { TestBed } from '@angular/core/testing';

import { CardChoisirService } from './card-choisir.service';

describe('CardChoisirService', () => {
  let service: CardChoisirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardChoisirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
