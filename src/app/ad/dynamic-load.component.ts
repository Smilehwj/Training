import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-ad',
  template: `
    <div class="title">
      Dynamic Component
    </div>
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `,
  styles: [
    '.title { color: blueviolet; font-weight: bold; font-size: 20px;}',
  ]
})
export class DynamicLoadComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
