import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCardsComponent } from './materia-cards.component';

describe('MateriaCardsComponent', () => {
  let component: MateriaCardsComponent;
  let fixture: ComponentFixture<MateriaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
