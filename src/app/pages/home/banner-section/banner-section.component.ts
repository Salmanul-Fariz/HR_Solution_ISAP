import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.scss',
})
export class BannerSectionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.zoomCarouselImage('0');

      const myCarousel = document?.getElementById(
        'carouselExampleCaptions'
      ) as HTMLElement;

      if (myCarousel)
        myCarousel.addEventListener('slide.bs.carousel', (event: any) => {
          this.zoomCarouselImageRemove();

          const targetIndex = event.to;

          setTimeout(() => {
            this.zoomCarouselImage(targetIndex);
          }, 900);
        });
    }
  }

  zoomCarouselImage(id: string) {
    const image = document.getElementById(
      `carousel_image_${id}`
    ) as HTMLImageElement;

    image.style.transform = 'scale(1.06)';
  }

  zoomCarouselImageRemove() {
    for (let i = 0; i < 3; i++) {
      const image = document.getElementById(
        `carousel_image_${i}`
      ) as HTMLImageElement;

      image.style.transform = 'scale(1)';
    }
  }
}
