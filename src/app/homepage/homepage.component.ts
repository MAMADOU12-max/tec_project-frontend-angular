import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

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

  // actu_news: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['<i class="fa fa-arrow-left fa-2x mean_background text-white p-1 px-2 rounded-pill"></i>', 
  //   '<i class="fa fa-arrow-right fa-2x mean_background text-white p-1 px-2 rounded-pill"></i>'],
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: true
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 3
  //     }
  //   },
  //   nav: false
  // }


  constructor() {}

  ngOnInit(): void {
  }
}
