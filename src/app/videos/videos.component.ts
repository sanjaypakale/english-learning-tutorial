import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videoSources: string[] = [
    'assets/vocabulary.mp4',
    'assets/peppapig.mp4 ',
    'assets/balganes.mp4',
    'assets/peppapig1.mp4 ',
    'assets/peppapig2.mp4 ',
    'assets/cb1.mp4 ',
    'assets/cb2.mp4 ',
    'assets/cb3.mp4 ',
    'assets/story1.mp4 ',
    'assets/story2mp4 ',
    'assets/story3.mp4 ',
  ];
  constructor() {

  }
}
