import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-present-perfect-continuous-tense',
  templateUrl: './present-perfect-continuous-tense.component.html',
  styleUrls: ['./present-perfect-continuous-tense.component.css']
})
export class PresentPerfectContinuousTenseComponent {
jsonData: any;
jsonUrl = 'assets/present-perfect-continuous-tense.json'
constructor(private httpClient: HttpClient) {
  this.jsonData = httpClient.get(this.jsonUrl).subscribe(c => {
    this.jsonData = c;
    console.log(this.jsonData);
  })
}
}
