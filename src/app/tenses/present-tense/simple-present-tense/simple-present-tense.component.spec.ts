import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePresentTenseComponent } from './simple-present-tense.component';

describe('SimplePresentTenseComponent', () => {
  let component: SimplePresentTenseComponent;
  let fixture: ComponentFixture<SimplePresentTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePresentTenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePresentTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
