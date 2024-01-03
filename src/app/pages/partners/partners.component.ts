import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  customOptions: OwlOptions = {
    loop: true,
    // autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    lazyLoad: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
  };

  PartnerSlidesStore = [
    {
      id: '1',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/2-2.png',
    },
    {
      id: '2',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/3-2.png',
    },
    {
      id: '3',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/4-1.png',
    },
    {
      id: '4',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/5-1.png',
    },
    {
      id: '5',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/6-1.png',
    },
    {
      id: '6',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/7-1.png',
    },
    {
      id: '7',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/2-2.png',
    },
    {
      id: '8',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/3-2.png',
    },
    {
      id: '9',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/4-1.png',
    },
    {
      id: '10',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/5-1.png',
    },
    {
      id: '11',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/6-1.png',
    },
    {
      id: '12',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/7-1.png',
    },
  ];
}
