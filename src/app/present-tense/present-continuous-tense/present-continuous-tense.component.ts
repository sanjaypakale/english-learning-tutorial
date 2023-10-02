import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-present-continuous-tense',
  templateUrl: './present-continuous-tense.component.html',
  styleUrls: ['./present-continuous-tense.component.css']
})
export class PresentContinuousTenseComponent {
  jsonData: any;
  jsonUrl = 'assets/present-continuouse-tense.json'
  constructor(private httpClient: HttpClient) {
    this.jsonData = httpClient.get(this.jsonUrl).subscribe(c => {
      this.jsonData = c;
      console.log(this.jsonData);
    })
  }
}
