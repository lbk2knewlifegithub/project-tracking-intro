import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTrackingPageComponent } from './containers';

const routes: Routes = [{ path: '', component: ProjectTrackingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTrackingRoutingModule {}
