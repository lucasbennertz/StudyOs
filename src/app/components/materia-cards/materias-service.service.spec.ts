import { TestBed } from '@angular/core/testing';

import { MateriasServiceService } from '../../views/materias/materias.service';

describe('MateriasServiceService', () => {
  let service: MateriasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
