import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sight-words',
  templateUrl: './sight-words.component.html',
  styleUrls: ['./sight-words.component.css']
})
export class SightWordsComponent {

  sightWordsData: any;
  jsonUrl = 'assets/sight-words.json'
  synth!: SpeechSynthesis;
  wordIndices = Array.from({ length: 100 }, (_, i) => i);
  constructor(private httpClient: HttpClient) {
    httpClient.get(this.jsonUrl).subscribe(c => {
      this.sightWordsData = c;
      console.log(this.sightWordsData);
    })
    this.synth = window.speechSynthesis;
    //this.speak("Hello World")
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    this.synth.speak(utterance);
  }

}
