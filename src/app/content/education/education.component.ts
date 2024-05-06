import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  constructor(private dataService: DataService) {}

  walid = this.dataService.getPerson();

  education = this.dataService.getEducation();

  getClass(index: number) {
    if(this.dataService.getExperiences()?.length! % 2 === 0){
      if (index % 2 === 0) {
        return 'timeline-unverted';
      } else {
        return 'timeline-inverted';
      }
    }else{
      if (index % 2 === 0) {
        return 'timeline-inverted';
      } else {
        return 'timeline-unverted';
      }
    }
  }
}
