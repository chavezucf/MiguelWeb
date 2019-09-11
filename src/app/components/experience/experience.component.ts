import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience/experience.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  leadershipExperiences: Observable<Experience[]>;
  otherExperiences: Observable<Experience[]>;

  showSpinner: boolean = true;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.leadershipExperiences = this.experienceService.getLeadershipExperience();
    this.otherExperiences = this.experienceService.getOtherExperience();
    this.leadershipExperiences.subscribe(() => this.showSpinner = false)
  }

}