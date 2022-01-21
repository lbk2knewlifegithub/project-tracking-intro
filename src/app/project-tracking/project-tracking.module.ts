import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectTrackingPageComponent } from './containers';
import { ProjectTrackingRoutingModule } from './project-tracking-routing.module';

// const COMPONENTS = [];
const CONTAINERS = [ProjectTrackingPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ProjectTrackingRoutingModule],
  declarations: [CONTAINERS],
})
export class ProjectTrackingModule {}
