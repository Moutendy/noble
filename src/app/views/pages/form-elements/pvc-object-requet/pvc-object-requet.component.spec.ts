import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcObjectRequetComponent } from './pvc-object-requet.component';

describe('PvcObjectRequetComponent', () => {
  let component: PvcObjectRequetComponent;
  let fixture: ComponentFixture<PvcObjectRequetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvcObjectRequetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcObjectRequetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
