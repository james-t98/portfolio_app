import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'mail' },
    { title: 'Contact', url: '/folder/contact', icon: 'paper-plane' },
    { title: 'About Me', url: '/folder/about', icon: 'heart' }
  ];
  public labels = ['Deep Learning', 'Generative AI', 'Large Language Models', 'AWS', 'SageMaker'];
  constructor() {}
}