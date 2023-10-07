import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectTenseComponent } from './present-perfect-tense.component';

describe('PresentPerfectTenseComponent', () => {
  let component: PresentPerfectTenseComponent;
  let fixture: ComponentFixture<PresentPerfectTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentPerfectTenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentPerfectTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
