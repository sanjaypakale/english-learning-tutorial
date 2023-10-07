import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectContinuousTenseComponent } from './present-perfect-continuous-tense.component';

describe('PresentPerfectContinuousTenseComponent', () => {
  let component: PresentPerfectContinuousTenseComponent;
  let fixture: ComponentFixture<PresentPerfectContinuousTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentPerfectContinuousTenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentPerfectContinuousTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
