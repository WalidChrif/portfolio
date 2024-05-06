import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  constructor(private dataService: DataService) {}

  walid = this.dataService.getPerson();

  experiences = this.dataService.getExperiences();

  getClass(index: number) {
    if (index % 2 === 0) {
      return 'timeline-unverted';
    } else {
      return 'timeline-inverted';
    }
  }
}
