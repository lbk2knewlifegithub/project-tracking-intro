import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  tadaOnEnterAnimation,
  zoomOutUpOnLeaveAnimation
} from 'angular-animations';
import { identifyLink, Link } from 'src/app/models';

@Component({
  selector: 'lbk-nav-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      *ngIf="open"
      @fadeInOnEnter
      @fadeOutOnLeave
      class="fixed inset-0 bg-black/50 w-full h-full z-30"
      (click)="onOverlay()"
    >
      <div @tadaOnEnter @zoomOutUpOnLeave class="mt-32 container z-50">
        <ul>
          <ng-container *ngFor="let link of links; trackBy: identifyLink">
            <li>
              <a [routerLink]="link.path">{{ link.name }}</a>
            </li>
          </ng-container>

          <!-- login -->
          <li>
            <a class="w-full block border-t pt-6 text-fill-700" outerLink="/"
              >Login</a
            >
          </li>
          <!-- end login -->
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      ul {
        @apply bg-white rounded-lg shadow-md p-6 grid gap-6 max-w-xs mx-auto;
        @apply font-heading font-bold text-lg uppercase tracking-wider text-center;
      }
    `,
  ],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ delay: 300 }),
    zoomOutUpOnLeaveAnimation(),
    tadaOnEnterAnimation({ delay: 300 }),
  ],
})
export class NavOverlayComponent {
  identifyLink = identifyLink;
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  @Input()
  links: Link[] = [
    {
      name: 'product',
      path: '/',
    },
    {
      name: 'Features',
      path: '/',
    },
    {
      name: 'Pricing',
      path: '/',
    },
  ];

  onOverlay() {
    this.openChange.emit(!this.open);
  }
}
