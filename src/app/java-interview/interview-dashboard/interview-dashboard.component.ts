import { Component } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-interview-dashboard',
  templateUrl: './interview-dashboard.component.html',
  styleUrls: ['./interview-dashboard.component.css']
})
export class InterviewDashboardComponent {
  safeUrl: SafeResourceUrl;
  constructor(private dialogService: DialogService, private sanitizer: DomSanitizer) { 
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/static-files/core-java.html');
  }

  openHtmlFileDialog() {
    // Replace with the path to your HTML file
    const htmlFilePath = 'assets/sample.html';
    this.dialogService.openHtmlFileDialog(htmlFilePath);
  }
}
