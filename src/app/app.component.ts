import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'english-learning';

  synth!: SpeechSynthesis;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.synth = window.speechSynthesis;
  }

  ngOnInit() { }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    // Handle the mouseup event, e.g., retrieve selected text here
    const selectedText = this.getSelectedText();
    this.speak(selectedText)
  }

  getSelectedText() {
    const selected  = window.getSelection();
    if (selected) {
      return selected.toString();
    }
    return '';
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    this.synth.speak(utterance);
  }
}
