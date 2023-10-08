import { Component } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-interview-dashboard',
  templateUrl: './interview-dashboard.component.html',
  styleUrls: ['./interview-dashboard.component.css']
})
export class InterviewDashboardComponent {
  constructor(private dialogService: DialogService) { }

  openHtmlFileDialog() {
    // Replace with the path to your HTML file
    const htmlFilePath = 'assets/sample.html';
    this.dialogService.openHtmlFileDialog(htmlFilePath);
  }
}
