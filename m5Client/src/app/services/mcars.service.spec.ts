import { TestBed, inject } from '@angular/core/testing';

import { McarsService } from './mcars.service';

describe('McarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McarsService]
    });
  });

  it('should be created', inject([McarsService], (service: McarsService) => {
    expect(service).toBeTruthy();
  }));
});
