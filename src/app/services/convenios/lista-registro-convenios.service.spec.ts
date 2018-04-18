import { TestBed, inject } from '@angular/core/testing';

import { ListaRegistroConveniosService } from './lista-registro-convenios.service';

describe('ListaRegistroConveniosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaRegistroConveniosService]
    });
  });

  it('should be created', inject([ListaRegistroConveniosService], (service: ListaRegistroConveniosService) => {
    expect(service).toBeTruthy();
  }));
});
