import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChoisirComponent } from './card-choisir.component';

describe('CardChoisirComponent', () => {
  let component: CardChoisirComponent;
  let fixture: ComponentFixture<CardChoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChoisirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
