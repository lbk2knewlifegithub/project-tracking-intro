import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-project-tracking-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="max-w-[1440px] mx-auto overflow-hidden">
      <lbk-intro class="block mt-32 mb-40 xl:mb-0 xl:mt-52"></lbk-intro>
    </main>
  `,
})
export class ProjectTrackingPageComponent {}
