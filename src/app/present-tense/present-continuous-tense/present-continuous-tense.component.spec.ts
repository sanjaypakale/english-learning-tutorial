import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentContinuousTenseComponent } from './present-continuous-tense.component';

describe('PresentContinuousTenseComponent', () => {
  let component: PresentContinuousTenseComponent;
  let fixture: ComponentFixture<PresentContinuousTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentContinuousTenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentContinuousTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
