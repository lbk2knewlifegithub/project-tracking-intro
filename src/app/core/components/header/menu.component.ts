import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- <img src="" alt=""> -->
  `,
})
export class MenuComponent {
  @Input() open!: boolean
}
