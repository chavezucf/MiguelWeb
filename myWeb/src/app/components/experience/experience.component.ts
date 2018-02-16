import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service'
import { element } from 'protractor';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  developerJobs: [any];
  otherJobs: [any];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getDeveloperJobs().subscribe(developerJobs => {
      this.developerJobs = developerJobs;
      console.log(this.developerJobs.length)
    });

    this.experienceService.getOtherJobs().subscribe(otherJobs => {
      this.otherJobs = otherJobs;
      console.log(this.otherJobs.length)
    });
  }
  

}