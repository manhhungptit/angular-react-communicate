import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  message = '';

  constructor() {
  }

  ngOnInit() {
    window.onmessage = (e) => {
      // console.log('event', e);
      if (e.origin === "http://localhost:3000") {
        const data = JSON.parse(e.data);
        this.message = data.content;
      }
    }
  }
}
