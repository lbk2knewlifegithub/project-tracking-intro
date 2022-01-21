import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { zoomInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'lbk-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="toggle()">
      <img @zoomInOnEnter *ngFor="let src of [src]" [src]="src" alt="Menu" />
    </button>
  `,
  animations: [zoomInOnEnterAnimation()],
})
export class MenuComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  get src() {
    return this.open
      ? 'assets/images/icon-close.svg'
      : 'assets/images/icon-hamburger.svg';
  }

  toggle() {
    this.openChange.emit(!this.open);
  }
}
