import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcEvenementComponent } from './pvc-evenement.component';

describe('PvcEvenementComponent', () => {
  let component: PvcEvenementComponent;
  let fixture: ComponentFixture<PvcEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvcEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
