import { TestBed } from '@angular/core/testing';

import { KeyboardRunnerService } from './keyboard-runner.service';

describe('KeyboardRunnerService', () => {
  let service: KeyboardRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
