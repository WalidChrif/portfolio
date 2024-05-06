import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IntroductionComponent} from './content/introduction/introduction.component';
import { AboutComponent } from './content/about/about.component';
import { ResumeComponent } from './content/resume/resume.component';
import { FeaturesComponent } from './content/features/features.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { BlogComponent } from './content/blog/blog.component';
import { StartedComponent } from './content/started/started.component';
import { ConsultComponent } from './content/consult/consult.component';
import { FooterComponent } from './content/footer/footer.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { EducationComponent } from './content/education/education.component';


// import { RedirectGuard } from './RedirectGuard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, AboutComponent, ResumeComponent,
     FeaturesComponent, SkillsComponent, ProjectsComponent, BlogComponent, StartedComponent,
     ConsultComponent, FooterComponent, ExperienceComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
