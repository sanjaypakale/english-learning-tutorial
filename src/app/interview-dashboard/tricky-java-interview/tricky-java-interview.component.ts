import { Component } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-tricky-java-interview',
  templateUrl: './tricky-java-interview.component.html',
  styleUrls: ['./tricky-java-interview.component.css']
})
export class TrickyJavaInterviewComponent {
  concurrencyHtml = 'assets/static-files/concurrency.html';
  constructor(private dialogService: DialogService) {

  }

  openConcurrency() {
    this.dialogService.openHtmlFileDialog(this.concurrencyHtml);
  }

  openDatabase(){
    this.dialogService.openHtmlFileDialog('assets/static-files/database-question.html');
  }

  opentExceptionHandling(){
    this.dialogService.openHtmlFileDialog('assets/static-files/exception-handling.html');
  }

  opentRestfulService(){
    this.dialogService.openHtmlFileDialog('assets/static-files/restful-service.html');
  }

  opentdp(){
    this.dialogService.openHtmlFileDialog('assets/static-files/dependency-injection.html');
  }

  opentMultithreading(){
    this.dialogService.openHtmlFileDialog('assets/static-files/multi-threading.html');
  }

  opentCaching(){
    this.dialogService.openHtmlFileDialog('assets/static-files/caching.html');
  }
  
  openMicroservice(){
    this.dialogService.openHtmlFileDialog('assets/static-files/microservice.html');
  }

  openSecurity(){
    this.dialogService.openHtmlFileDialog('assets/static-files/security.html');
  }
}
