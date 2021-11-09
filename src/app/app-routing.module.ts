import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { ZyrisComponent } from './zyris/zyris.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: '', component: ZyrisComponent },
   { path: 'story', component: StoryComponent },
   { path: 'projects', component: ProjectsComponent }

 ];

 @NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
