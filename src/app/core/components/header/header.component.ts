import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="absolute top-0 w-full container pt-10 z-50">
      <nav class="flex justify-between">
        <img class="max-w-[30px]" src="assets/images/logo.svg" alt="Logo" />

        <lbk-menu
          [(open)]="openNavOverlay"
        ></lbk-menu>
      </nav>
    </header>

    <lbk-nav-overlay [(open)]="openNavOverlay"></lbk-nav-overlay>
  `,
})
export class HeaderComponent {
  openNavOverlay = false;

  toggleNavOverlay() {
    this.openNavOverlay = !this.openNavOverlay;
  }
}
