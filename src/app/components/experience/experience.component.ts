import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  developerJ: Observable<any[]>;
  otherJ: Observable<any[]>;

  developerJobs: any[];
  otherJobs: any[];

  constructor(db: AngularFireDatabase) { 
    this.developerJ = db.list('experience/developer').valueChanges();
    this.otherJ = db.list('experience/other').valueChanges();
    this.developerJ.subscribe(res => this.developerJobs = res);
    this.otherJ.subscribe(res => this.otherJobs = res);
  }

  ngOnInit() {
    /*this.experienceService.getDeveloperJobs().subscribe(developerJobs => {
      this.developerJobs = developerJobs;
      console.log(this.developerJobs.length)
    });

    this.experienceService.getOtherJobs().subscribe(otherJobs => {
      this.otherJobs = otherJobs;
      console.log(this.otherJobs.length)
    });*/
  }
  

}