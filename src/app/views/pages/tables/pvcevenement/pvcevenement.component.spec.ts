import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcevenementComponent } from './pvcevenement.component';

describe('PvcevenementComponent', () => {
  let component: PvcevenementComponent;
  let fixture: ComponentFixture<PvcevenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvcevenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcevenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
