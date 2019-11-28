import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private home: AppHomeComponent) { }
  ngOnInit() {
  }
  goHome() {
    this.home.goHome();
  }
  goAutor() {
    this.home.goAutor();
  }
  goAboutUs() {
    this.home.goAboutUs();
  }
}
