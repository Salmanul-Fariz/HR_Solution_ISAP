import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    lazyLoad: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 6,
      },
    },
  };

  slidesStore = [
    {
      id: '1',
      src: 'assets/images/services/job-150x150.png',
    },
    {
      id: '2',
      src: 'assets/images/services/solar-150x150.png',
    },
    {
      id: '3',
      src: 'assets/images/services/nft-150x150.png',
    },
    {
      id: '4',
      src: 'assets/images/services/network-150x150.png',
    },
    {
      id: '5',
      src: 'assets/images/services/metaverse-150x150.png',
    },
    {
      id: '6',
      src: 'assets/images/services/legal-150x150.png',
    },
    {
      id: '7',
      src: 'assets/images/services/ISAP-School-logo-150x150.png',
    },
    {
      id: '8',
      src: 'assets/images/services/isap-phone-black-150x150.png',
    },
    {
      id: '9',
      src: 'assets/images/services/isap-life-black-150x150.png',
    },
    {
      id: '10',
      src: 'assets/images/services/ISAP-HEALTH-B-150x150.png',
    },
    {
      id: '11',
      src: 'assets/images/services/ISAP-Green-150x150.png',
    },
    {
      id: '12',
      src: 'assets/images/services/isap-clinic-150x150.png',
    },
    {
      id: '13',
      src: 'assets/images/services/isap-CC-150x150.png',
    },
    {
      id: '14',
      src: 'assets/images/services/isap-black-150x150.png',
    },
    {
      id: '15',
      src: 'assets/images/services/ipeye-150x150.png',
    },
    {
      id: '16',
      src: 'assets/images/services/courses-150x150.png',
    },
    {
      id: '17',
      src: 'assets/images/services/b-digital-150x150.png',
    },
    {
      id: '18',
      src: 'assets/images/services/b-crypto-150x150.png',
    },
    {
      id: '19',
      src: 'assets/images/services/bakalat-150x150.png',
    },
  ];
}
