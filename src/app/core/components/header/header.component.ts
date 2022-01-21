import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <nav>
      <img src="assets/images/logo.svg" alt="Logo" />

      </nav>
    </header>
  `,
})
export class HeaderComponent {}
