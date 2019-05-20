import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Experience {
  companyName: string;
  position: string;
  location: string;
  index: number;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  type: string;
  id?: string;
}


@Injectable()
export class ExperienceService {
  
  experienceCollections: AngularFirestoreCollection<Experience>;
  experiences: Observable<Experience[]>;
  constructor(private afs: AngularFirestore) { }

  getLeadershipExperience(){
    this.experienceCollections = this.afs.collection('experiences', ref => {
      return ref.orderBy('index', 'desc').where('type', '==', 'leadership')
    });
    this.experiences = this.experienceCollections.valueChanges();
    return this.experiences
  }
  getOtherExperience(){
    this.experienceCollections = this.afs.collection('experiences', ref => {
      return ref.orderBy('index', 'desc').where('type', '==', 'other')
    });
    this.experiences = this.experienceCollections.valueChanges();
    return this.experiences
  }

}
