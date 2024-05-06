import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  constructor(private dataService : DataService){}

  services = this.dataService.getServices();

}
