import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left fa-2x mean_background text-white p-1 px-2 rounded-pill"></i>', 
    '<i class="fa fa-arrow-right fa-2x mean_background text-white p-1 px-2 rounded-pill"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4,
        nav: false,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      }
    },
    nav: true
  }

  actu_news: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', 
    ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        // nav: t,
        // loop: false,
        // mouseDrag: false,
        // touchDrag: false,
        // pullDrag: false,
      }
    },
    nav: true
  }

  produits: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left positionned_arrow fa-2x mean_background text-white p-1 px-2 rounded-pill"></i>', 
    '<i class="fa fa-arrow-right fa-2x mean_background text-white p-1 px-2 rounded-pill"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {  
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4,
      }
    },
    nav: true
  }

  constructor() {}

  ngOnInit(): void {
  }

}
