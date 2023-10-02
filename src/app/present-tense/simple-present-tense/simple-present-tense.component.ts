import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-present-tense',
  templateUrl: './simple-present-tense.component.html',
  styleUrls: ['./simple-present-tense.component.css']
})
export class SimplePresentTenseComponent {
  jsonData: any;
  jsonUrl = 'assets/simple-present-tense.json'
  constructor(private httpClient: HttpClient) {
    this.jsonData = httpClient.get(this.jsonUrl).subscribe(c => {
      this.jsonData = c;
      console.log(this.jsonData);
    })
  }

}
