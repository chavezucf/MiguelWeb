import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ExperienceService {  
  developerJobsRef: AngularFireList<any>;
  developerJobs: Observable<any>;

  otherJobsRef: AngularFireList<any>;
  otherJobs: Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  getDeveloperJobs() {
    this.developerJobsRef = this.db.list('experience/developer');
    this.developerJobs = this.developerJobsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.developerJobs;
  }
  getOtherJobs() {
    this.otherJobsRef = this.db.list('experience/other');
    this.otherJobs = this.otherJobsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.otherJobs;
  }

}
