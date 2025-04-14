import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationsCardsComponent } from './annotations-cards.component';

describe('AnnotationsCardsComponent', () => {
  let component: AnnotationsCardsComponent;
  let fixture: ComponentFixture<AnnotationsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnotationsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
