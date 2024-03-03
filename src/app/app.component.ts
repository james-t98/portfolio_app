import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', path:'home' ,url: '/home', icon: 'mail' },
    { title: 'Contact', path:'contact-me', url: '/contact-me', icon: 'paper-plane' },
    { title: 'About Me', path:'about-me' ,url: '/about-me', icon: 'heart' }
  ];
  public labels = ['Deep Learning', 'Generative AI', 'Large Language Models', 'AWS', 'SageMaker'];
  constructor() {}
}