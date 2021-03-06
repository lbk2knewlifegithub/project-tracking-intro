import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { identifyLink, Link } from 'src/app/models';
import { listAnimation } from 'src/app/shared';

@Component({
  selector: 'lbk-links-desktop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <ng-container *ngFor="let link of links; trackBy: identifyLink">
        <li>
          <a class="animated-link" [routerLink]="link.path">{{ link.name }}</a>
        </li>
      </ng-container>

      <!-- ball -->
      <li class="w-2 h-2 bg-fill-700 rounded-full"></li>
      <!-- end ball -->

      <!-- login -->
      <li>
        <a routerLink="/" class=" text-fill-700 hover:text-fill-900 animated-link">Login</a>
      </li>
      <!-- end login -->
    </ul>
  `,
  styles: [
    `
      ul {
        @apply flex gap-10 items-center;
        @apply font-heading font-bold text-lg uppercase tracking-wider;
      }
    `,
  ],
  animations: [listAnimation('li')],
})
export class NavDesktopComponent {
  @Input() links!: Link[];

  identifyLink = identifyLink;
}
