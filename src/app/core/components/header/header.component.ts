import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from 'src/app/models';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="absolute top-0 w-full pt-10 z-50 xl:pt-16">
      <div class="container">
        <nav class="flex justify-between">
          <img class="max-w-[30px]" src="assets/images/logo.svg" alt="Logo" />

          <lbk-menu [(open)]="openNavOverlay" class="xl:hidden"></lbk-menu>

          <lbk-links-desktop
            class="hidden xl:block"
            [links]="links"
          ></lbk-links-desktop>
        </nav>
      </div>
    </header>

    <lbk-nav-overlay
      [links]="links"
      [(open)]="openNavOverlay"
    ></lbk-nav-overlay>
  `,
})
export class HeaderComponent {
  openNavOverlay = false;

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
}
