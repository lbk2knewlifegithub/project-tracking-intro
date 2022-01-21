import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './intro.component.html',
})
export class IntroComponent {}
