import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  fadeInLeftOnEnterAnimation,
  fadeInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './intro.component.html',
  animations: [
    fadeInLeftOnEnterAnimation(),
    fadeInOnEnterAnimation({ delay: 200 }),
  ],
})
export class IntroComponent {}
