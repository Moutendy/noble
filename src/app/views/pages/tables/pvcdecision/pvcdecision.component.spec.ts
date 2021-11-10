import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcdecisionComponent } from './pvcdecision.component';

describe('PvcdecisionComponent', () => {
  let component: PvcdecisionComponent;
  let fixture: ComponentFixture<PvcdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvcdecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
