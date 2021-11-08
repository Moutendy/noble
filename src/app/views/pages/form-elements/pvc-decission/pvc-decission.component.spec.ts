import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcDecissionComponent } from './pvc-decission.component';

describe('PvcDecissionComponent', () => {
  let component: PvcDecissionComponent;
  let fixture: ComponentFixture<PvcDecissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvcDecissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcDecissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
