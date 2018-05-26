import { Component, Input } from '@angular/core';

import { AdComponent } from './interface';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `,
  styleUrls: ['./dynamic-load.component.css']
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
