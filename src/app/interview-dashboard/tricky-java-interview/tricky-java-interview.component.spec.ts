import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickyJavaInterviewComponent } from './tricky-java-interview.component';

describe('TrickyJavaInterviewComponent', () => {
  let component: TrickyJavaInterviewComponent;
  let fixture: ComponentFixture<TrickyJavaInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrickyJavaInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrickyJavaInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
