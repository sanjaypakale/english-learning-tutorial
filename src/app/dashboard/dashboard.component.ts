import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  greetingMessage = "";
  constructor() {
    this.setGreetingMessage();
  }
  setGreetingMessage() {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      this.greetingMessage = 'Good morning';
    } else if (currentTime >= 12 && currentTime < 17) {
      this.greetingMessage = 'Good afternoon';
    } else {
      this.greetingMessage = 'Good evening';
    }
  }
}
