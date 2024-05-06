import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, SlicePipe } from '@angular/common';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, SlicePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

Math : Math = Math


constructor(private dataService : DataService){}

  mainSkills = this.dataService.getMainSkills();

  otherSkills = this.dataService.getOtherSkills();;

}
