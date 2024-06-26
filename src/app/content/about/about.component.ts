import { Component, inject } from '@angular/core';
import { NgIf, NgFor, KeyValuePipe, KeyValue } from '@angular/common';
import { Person } from '../../models/person.model';
import { DataService } from '../../services/data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgFor, KeyValuePipe,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(public dataService : DataService){}
  walid: Person = this.dataService.getPerson();
  infos = this.dataService.getAboutInfo();

  // Preserve original property order
  sortNull() {return 0}
  originalOrder = () => 0
}
