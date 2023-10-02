import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-present-perfect-tense',
  templateUrl: './present-perfect-tense.component.html',
  styleUrls: ['./present-perfect-tense.component.css']
})
export class PresentPerfectTenseComponent {
  jsonData: any;
  jsonUrl = 'assets/present-perfect-tense.json'
  constructor(private httpClient: HttpClient) {
    this.jsonData = httpClient.get(this.jsonUrl).subscribe(c => {
      this.jsonData = c;
      console.log(this.jsonData);
    })
  }
}
