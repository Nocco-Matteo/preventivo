import { Component, OnInit } from '@angular/core';
import { homeText } from 'src/app/configs/home.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text: string = homeText
  displayedText: string = ""

  ngOnInit() {
    this.showText();
    let videoElement : HTMLVideoElement = document.querySelector('.video')!;
    videoElement.muted = true;
  }

  showText() {
    let i = 0;
    let interval = setInterval(() => {
      if (i < this.text.length) {
        this.displayedText += this.text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Cambia questo valore per regolare la velocità
  }
}
