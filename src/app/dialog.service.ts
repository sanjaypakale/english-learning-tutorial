import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HtmlFileDialogComponent } from './html-file-dialog/html-file-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  openHtmlFileDialog(htmlFilePath: string) {
    this.dialog.open(HtmlFileDialogComponent, {
      width: '80%', // Customize the width as needed
      data: { htmlFilePath },
      height: '80%',
      panelClass: 'dialog-content'
    });
  }
}
