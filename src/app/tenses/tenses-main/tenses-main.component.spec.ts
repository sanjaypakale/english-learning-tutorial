import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensesMainComponent } from './tenses-main.component';

describe('TensesMainComponent', () => {
  let component: TensesMainComponent;
  let fixture: ComponentFixture<TensesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensesMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TensesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
