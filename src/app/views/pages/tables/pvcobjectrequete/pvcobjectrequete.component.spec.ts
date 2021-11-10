import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcobjectrequeteComponent } from './pvcobjectrequete.component';

describe('PvcobjectrequeteComponent', () => {
  let component: PvcobjectrequeteComponent;
  let fixture: ComponentFixture<PvcobjectrequeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvcobjectrequeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcobjectrequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
