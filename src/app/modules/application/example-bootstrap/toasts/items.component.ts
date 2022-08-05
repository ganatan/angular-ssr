import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-toasts',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ToastsComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScript('./assets/params/js/toasts.js');
    }
  }

  loadScript(name: string): void {
    const src = document.createElement('script');
    src.type = 'text/javascript';
    src.src = name;
    src.async = false;
    document.getElementsByTagName('head')[0].appendChild(src);
  }

}
