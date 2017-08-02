import { TestBed, inject } from '@angular/core/testing';

import { PeepService } from './peep.service';

describe('PeepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeepService]
    });
  });

  it('should be created', inject([PeepService], (service: PeepService) => {
    expect(service).toBeTruthy();
  }));
});
