import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTenseComponent } from './past-tense.component';

describe('PastTenseComponent', () => {
  let component: PastTenseComponent;
  let fixture: ComponentFixture<PastTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastTenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
