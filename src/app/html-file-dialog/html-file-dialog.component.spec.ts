import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFileDialogComponent } from './html-file-dialog.component';

describe('HtmlFileDialogComponent', () => {
  let component: HtmlFileDialogComponent;
  let fixture: ComponentFixture<HtmlFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
