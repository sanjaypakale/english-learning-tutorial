import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTenseComponent } from './present-tense.component';

describe('PresentTenseComponent', () => {
  let component: PresentTenseComponent;
  let fixture: ComponentFixture<PresentTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentTenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
