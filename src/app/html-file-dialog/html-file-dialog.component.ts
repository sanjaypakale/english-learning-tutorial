import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-html-file-dialog',
  templateUrl: './html-file-dialog.component.html',
  styleUrls: ['./html-file-dialog.component.css']
})
export class HtmlFileDialogComponent {
  safeUrl: SafeResourceUrl;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {
    console.log(this.data)
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.htmlFilePath);
  }
}
