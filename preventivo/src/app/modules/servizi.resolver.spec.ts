import { TestBed } from '@angular/core/testing';

import { ServiziResolver } from './servizi.resolver';

describe('ServiziResolver', () => {
  let resolver: ServiziResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ServiziResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
