import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { ProjectsComponent } from './projects/projects.component';
import { ZyrisComponent } from './zyris/zyris.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    ProjectsComponent,
    ZyrisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
