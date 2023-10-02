import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { LoaderReutilizableService } from 'src/app/services/loader-reutilizable.service';
import Swiper from 'swiper';

import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements AfterViewInit  {

  imagesData: any[] = [];
  pruebaJsonImg = [
    {
      img: 'assets/img/dinero.svg',
      titulo: '<center>Recupera tu inversión<br> en 3 meses.</center>'
    },
    {
      img: 'assets/img/mujer.svg',
      titulo: '<center>Ropa para ella<br>3 x 2</center>'
    },
    {
      img: 'assets/img/pastel.svg',
      titulo: '<center>Muffin de Chocolate<br>por S/ 9.99 </center>'
    }
  ];

  
  constructor(
    private loaderReutilizable: LoaderReutilizableService,
  ) { }
  
  //@ViewChild('swiper') swiper: any;
  @ViewChild('swiper') swiperContainer: any;
  mySwiper: Swiper | undefined;
  delay = 1000;

  ngAfterViewInit(): void {
    // Inicializa Swiper después de que la vista se haya inicializado completamente
    this.mySwiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: this.delay,
        disableOnInteraction: false,
      },
    });
  }


}
