import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private imgUrls: string[] = [
    '../../assets/image/1.png',
    '../../assets/image/1.png',
    '../../assets/image/1.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}
