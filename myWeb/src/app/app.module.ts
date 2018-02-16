import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ExperienceService } from './services/experience.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'skills', component:SkillsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
